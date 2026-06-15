export type CountryDial = {
  iso: string;
  name: string;
  dialCode: string;
  minLength: number;
  maxLength: number;
  placeholder: string;
};

export const COUNTRY_DIAL_CODES: CountryDial[] = [
  { iso: "IN", name: "India", dialCode: "91", minLength: 10, maxLength: 10, placeholder: "9876543210" },
  { iso: "AE", name: "United Arab Emirates", dialCode: "971", minLength: 9, maxLength: 9, placeholder: "501234567" },
  { iso: "AU", name: "Australia", dialCode: "61", minLength: 9, maxLength: 9, placeholder: "412345678" },
  { iso: "BH", name: "Bahrain", dialCode: "973", minLength: 8, maxLength: 8, placeholder: "36001234" },
  { iso: "BD", name: "Bangladesh", dialCode: "880", minLength: 10, maxLength: 10, placeholder: "1712345678" },
  { iso: "CA", name: "Canada", dialCode: "1", minLength: 10, maxLength: 10, placeholder: "4165550123" },
  { iso: "DE", name: "Germany", dialCode: "49", minLength: 10, maxLength: 11, placeholder: "15123456789" },
  { iso: "FR", name: "France", dialCode: "33", minLength: 9, maxLength: 9, placeholder: "612345678" },
  { iso: "GB", name: "United Kingdom", dialCode: "44", minLength: 10, maxLength: 10, placeholder: "7123456789" },
  { iso: "HK", name: "Hong Kong", dialCode: "852", minLength: 8, maxLength: 8, placeholder: "91234567" },
  { iso: "ID", name: "Indonesia", dialCode: "62", minLength: 9, maxLength: 11, placeholder: "8123456789" },
  { iso: "IE", name: "Ireland", dialCode: "353", minLength: 9, maxLength: 9, placeholder: "851234567" },
  { iso: "IT", name: "Italy", dialCode: "39", minLength: 9, maxLength: 10, placeholder: "3123456789" },
  { iso: "JP", name: "Japan", dialCode: "81", minLength: 10, maxLength: 10, placeholder: "9012345678" },
  { iso: "KW", name: "Kuwait", dialCode: "965", minLength: 8, maxLength: 8, placeholder: "50123456" },
  { iso: "MY", name: "Malaysia", dialCode: "60", minLength: 9, maxLength: 10, placeholder: "123456789" },
  { iso: "MV", name: "Maldives", dialCode: "960", minLength: 7, maxLength: 7, placeholder: "7712345" },
  { iso: "NP", name: "Nepal", dialCode: "977", minLength: 10, maxLength: 10, placeholder: "9812345678" },
  { iso: "NL", name: "Netherlands", dialCode: "31", minLength: 9, maxLength: 9, placeholder: "612345678" },
  { iso: "NZ", name: "New Zealand", dialCode: "64", minLength: 8, maxLength: 10, placeholder: "211234567" },
  { iso: "OM", name: "Oman", dialCode: "968", minLength: 8, maxLength: 8, placeholder: "92123456" },
  { iso: "PK", name: "Pakistan", dialCode: "92", minLength: 10, maxLength: 10, placeholder: "3001234567" },
  { iso: "PH", name: "Philippines", dialCode: "63", minLength: 10, maxLength: 10, placeholder: "9171234567" },
  { iso: "QA", name: "Qatar", dialCode: "974", minLength: 8, maxLength: 8, placeholder: "33123456" },
  { iso: "SA", name: "Saudi Arabia", dialCode: "966", minLength: 9, maxLength: 9, placeholder: "512345678" },
  { iso: "SG", name: "Singapore", dialCode: "65", minLength: 8, maxLength: 8, placeholder: "81234567" },
  { iso: "LK", name: "Sri Lanka", dialCode: "94", minLength: 9, maxLength: 9, placeholder: "712345678" },
  { iso: "ZA", name: "South Africa", dialCode: "27", minLength: 9, maxLength: 9, placeholder: "821234567" },
  { iso: "KR", name: "South Korea", dialCode: "82", minLength: 9, maxLength: 10, placeholder: "1012345678" },
  { iso: "ES", name: "Spain", dialCode: "34", minLength: 9, maxLength: 9, placeholder: "612345678" },
  { iso: "CH", name: "Switzerland", dialCode: "41", minLength: 9, maxLength: 9, placeholder: "791234567" },
  { iso: "TH", name: "Thailand", dialCode: "66", minLength: 9, maxLength: 9, placeholder: "812345678" },
  { iso: "TR", name: "Turkey", dialCode: "90", minLength: 10, maxLength: 10, placeholder: "5321234567" },
  { iso: "US", name: "United States", dialCode: "1", minLength: 10, maxLength: 10, placeholder: "4155552671" },
  { iso: "VN", name: "Vietnam", dialCode: "84", minLength: 9, maxLength: 10, placeholder: "912345678" },
];

const countryByIso = new Map(COUNTRY_DIAL_CODES.map((country) => [country.iso, country]));

export const DEFAULT_COUNTRY_ISO = "IN";

export function getCountryByIso(iso: string): CountryDial | undefined {
  return countryByIso.get(iso.toUpperCase());
}

export function countryFlag(iso: string) {
  return iso
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

export function normalizeNationalNumber(value: string, dialCode: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith(dialCode)) {
    return digits.slice(dialCode.length);
  }
  return digits;
}

export function isValidNationalNumber(country: CountryDial, nationalNumber: string) {
  const digits = nationalNumber.replace(/\D/g, "");
  return digits.length >= country.minLength && digits.length <= country.maxLength;
}

export function formatWhatsAppNumber(country: CountryDial, nationalNumber: string) {
  const digits = nationalNumber.replace(/\D/g, "");
  return `+${country.dialCode}${digits}`;
}
