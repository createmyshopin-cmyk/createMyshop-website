import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { DEFAULT_COUNTRY_ISO, getCountryByIso } from "../../../lib/countryCodes";

async function lookupCountryFromIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp = forwardedFor?.split(",")[0]?.trim();

  if (!clientIp || clientIp === "127.0.0.1" || clientIp.startsWith("::")) {
    return null;
  }

  try {
    const response = await fetch(`https://ipapi.co/${clientIp}/country_code/`, {
      headers: { "User-Agent": "createmyshop-lead-capture/1.0" },
      next: { revalidate: 86400 },
    });

    if (!response.ok) return null;

    const countryCode = (await response.text()).trim().toUpperCase();
    return countryCode.length === 2 ? countryCode : null;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const requestHeaders = await headers();
  const headerCountry =
    requestHeaders.get("x-vercel-ip-country") ||
    requestHeaders.get("cf-ipcountry") ||
    requestHeaders.get("x-country-code");

  let countryCode = headerCountry?.toUpperCase() ?? null;

  if (!countryCode || countryCode === "XX" || countryCode === "T1") {
    countryCode = await lookupCountryFromIp(request);
  }

  if (!countryCode || !getCountryByIso(countryCode)) {
    countryCode = DEFAULT_COUNTRY_ISO;
  }

  const country = getCountryByIso(countryCode)!;

  return NextResponse.json({
    countryCode: country.iso,
    dialCode: country.dialCode,
    countryName: country.name,
  });
}
