
export interface PassportRanking {
  countryId: string;
  name: string;
  flag: string;
  powerScore: number;
  visaFreeAccess: number;
  visaOnArrival: number;
  eVisaAccess: number;
  totalAccess: number;
  rank: number;
  documents: string[];
  experiencePoints: number;
}

export const passportRankings: PassportRanking[] = [
  {
    countryId: "united-states",
    name: "United States",
    flag: "🇺🇸",
    powerScore: 92,
    visaFreeAccess: 116,
    visaOnArrival: 34,
    eVisaAccess: 12,
    totalAccess: 162,
    rank: 3,
    documents: [
      "Completed DS-11 Application Form",
      "Proof of U.S. Citizenship (Birth Certificate or Naturalization Certificate)",
      "Government-issued Photo ID",
      "Color Passport Photo (2x2 inches)",
      "Passport Fee Payment"
    ],
    experiencePoints: 850
  },
  {
    countryId: "japan",
    name: "Japan",
    flag: "🇯🇵",
    powerScore: 96,
    visaFreeAccess: 123,
    visaOnArrival: 38,
    eVisaAccess: 10,
    totalAccess: 171,
    rank: 1,
    documents: [
      "Completed Application Form",
      "Birth Certificate",
      "Family Register (Koseki Tohon)",
      "Passport Photo",
      "Japanese ID Card",
      "Application Fee Payment"
    ],
    experiencePoints: 920
  },
  {
    countryId: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    powerScore: 95,
    visaFreeAccess: 121,
    visaOnArrival: 35,
    eVisaAccess: 11,
    totalAccess: 167,
    rank: 2,
    documents: [
      "Completed Form K",
      "Singapore NRIC",
      "Digital Color Photo",
      "Supporting Documents for Name/Date of Birth",
      "Application Fee"
    ],
    experiencePoints: 890
  },
  {
    countryId: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    powerScore: 91,
    visaFreeAccess: 115,
    visaOnArrival: 33,
    eVisaAccess: 11,
    totalAccess: 159,
    rank: 4,
    documents: [
      "Completed Application Form",
      "Previous Passport (if renewal)",
      "Birth or Naturalization Certificate (first passport)",
      "2 Identical Passport Photos",
      "Fee Payment"
    ],
    experiencePoints: 830
  },
  {
    countryId: "canada",
    name: "Canada",
    flag: "🇨🇦",
    powerScore: 90,
    visaFreeAccess: 114,
    visaOnArrival: 32,
    eVisaAccess: 10,
    totalAccess: 156,
    rank: 5,
    documents: [
      "Completed Application Form",
      "Proof of Canadian Citizenship",
      "Supporting Identity Document",
      "2 Identical Passport Photos",
      "Guarantor Declaration",
      "Fee Payment"
    ],
    experiencePoints: 810
  },
  {
    countryId: "australia",
    name: "Australia",
    flag: "🇦🇺",
    powerScore: 89,
    visaFreeAccess: 112,
    visaOnArrival: 32,
    eVisaAccess: 11,
    totalAccess: 155,
    rank: 6,
    documents: [
      "Completed Application Form",
      "Birth Certificate or Australian Citizenship Certificate",
      "Identity Documents",
      "Passport Photo",
      "Fee Payment"
    ],
    experiencePoints: 800
  },
  {
    countryId: "schengen",
    name: "EU (Schengen)",
    flag: "🇪🇺",
    powerScore: 88,
    visaFreeAccess: 110,
    visaOnArrival: 30,
    eVisaAccess: 12,
    totalAccess: 152,
    rank: 7,
    documents: [
      "Completed Application Form",
      "Valid ID or Residence Card",
      "Passport Photo",
      "Birth Certificate",
      "Fee Payment"
    ],
    experiencePoints: 780
  },
  {
    countryId: "south-korea",
    name: "South Korea",
    flag: "🇰🇷",
    powerScore: 87,
    visaFreeAccess: 109,
    visaOnArrival: 31,
    eVisaAccess: 9,
    totalAccess: 149,
    rank: 8,
    documents: [
      "Completed Application Form",
      "Korean National ID Card",
      "Recent Passport Photo",
      "Family Relation Certificate",
      "Application Fee"
    ],
    experiencePoints: 760
  },
  {
    countryId: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    powerScore: 87,
    visaFreeAccess: 108,
    visaOnArrival: 30,
    eVisaAccess: 10,
    totalAccess: 148,
    rank: 9,
    documents: [
      "Online Application Form",
      "Proof of New Zealand Citizenship",
      "Digital ID Photo",
      "Supporting Identity Documents",
      "Fee Payment"
    ],
    experiencePoints: 750
  },
  {
    countryId: "brazil",
    name: "Brazil",
    flag: "🇧🇷",
    powerScore: 73,
    visaFreeAccess: 89,
    visaOnArrival: 28,
    eVisaAccess: 10,
    totalAccess: 127,
    rank: 10,
    documents: [
      "Completed Application Form",
      "Brazilian Identity Card (RG)",
      "CPF Number",
      "Birth Certificate",
      "Passport Photos",
      "Fee Payment"
    ],
    experiencePoints: 650
  }
];
