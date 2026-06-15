import { NextResponse } from "next/server";
import {
  formatWhatsAppNumber,
  getCountryByIso,
  isValidNationalNumber,
  normalizeNationalNumber,
} from "../../../lib/countryCodes";

type LeadPayload = {
  name?: string;
  whatsapp?: string;
  countryCode?: string;
  source?: string;
};

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const countryCode = payload.countryCode?.trim().toUpperCase() || "IN";
  const country = getCountryByIso(countryCode);
  const source = payload.source?.trim() || "unknown";

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (!country) {
    return NextResponse.json({ error: "Unsupported country code." }, { status: 400 });
  }

  const nationalNumber = normalizeNationalNumber(payload.whatsapp ?? "", country.dialCode);

  if (!isValidNationalNumber(country, nationalNumber)) {
    return NextResponse.json({ error: "A valid WhatsApp number is required." }, { status: 400 });
  }

  const lead = {
    name,
    whatsapp: formatWhatsAppNumber(country, nationalNumber),
    countryCode: country.iso,
    countryName: country.name,
    source,
    createdAt: new Date().toISOString(),
  };

  console.info("[LEAD CAPTURE]", lead);

  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (error) {
      console.error("[LEAD CAPTURE] Webhook failed:", error);
    }
  }

  return NextResponse.json({ ok: true });
}
