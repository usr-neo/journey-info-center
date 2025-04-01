
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check } from 'lucide-react';

interface VisaRequirement {
  country: string;
  studentVisa: {
    processingTime: string;
    validity: string;
    fees: string;
    requirements: string[];
  };
  workVisa: {
    processingTime: string;
    validity: string;
    fees: string;
    requirements: string[];
  };
  skilledWorkerVisa?: {
    processingTime: string;
    validity: string;
    fees: string;
    requirements: string[];
  };
}

const countryRequirements: VisaRequirement[] = [
  {
    country: "Germany",
    studentVisa: {
      processingTime: "4-6 weeks",
      validity: "Duration of course + 3 months",
      fees: "€75",
      requirements: [
        "Completed visa application form",
        "Valid passport (with at least 12 months validity)",
        "University admission letter",
        "Proof of financial resources (€10,332 per year)",
        "Health insurance coverage",
        "Academic certificates and transcripts",
        "Proof of German language proficiency (usually B1/B2)",
        "Biometric photographs",
        "Blocked account confirmation"
      ]
    },
    workVisa: {
      processingTime: "2-3 months",
      validity: "Up to 4 years",
      fees: "€75",
      requirements: [
        "Employment contract from a German employer",
        "Completed visa application form",
        "Valid passport (with at least 12 months validity)",
        "Proof of qualifications",
        "Health insurance coverage",
        "Biometric photographs",
        "Proof of accommodation in Germany"
      ]
    },
    skilledWorkerVisa: {
      processingTime: "1-3 months",
      validity: "Up to 4 years (renewable)",
      fees: "€75",
      requirements: [
        "Employment contract matching qualifications",
        "Recognized qualification (ZAB verification)",
        "Proof of language proficiency (usually B1)",
        "Valid passport (with at least 12 months validity)",
        "Health insurance coverage",
        "Job offer with minimum salary requirement (€48,400 per year or €37,752 for shortage occupations)",
        "Proof of accommodation in Germany",
        "Biometric photographs"
      ]
    }
  },
  {
    country: "Japan",
    studentVisa: {
      processingTime: "1-3 months",
      validity: "Duration of course + 3 months",
      fees: "¥3,000",
      requirements: [
        "Certificate of Eligibility (applied by school)",
        "Visa application form",
        "Valid passport",
        "Recent passport-sized photographs",
        "Admission letter from Japanese institution",
        "Proof of sufficient funds",
        "Academic transcripts",
        "Proof of Japanese language proficiency (for courses in Japanese)"
      ]
    },
    workVisa: {
      processingTime: "1-3 months",
      validity: "1-3 years (renewable)",
      fees: "¥3,000",
      requirements: [
        "Certificate of Eligibility (applied by employer)",
        "Visa application form",
        "Valid passport",
        "Recent passport-sized photographs",
        "Employment contract",
        "Detailed job description",
        "Company registration documents",
        "Academic and professional certificates"
      ]
    },
    skilledWorkerVisa: {
      processingTime: "1-3 months",
      validity: "1-5 years (points-based system)",
      fees: "¥3,000",
      requirements: [
        "Certificate of Eligibility under HSFP (Highly Skilled Foreign Professional)",
        "Valid passport",
        "Recent passport-sized photographs",
        "Points calculation sheet (need 70+ points)",
        "Proof of academic qualifications",
        "Proof of professional experience",
        "Employment contract with salary details",
        "Income tax certificates"
      ]
    }
  },
  {
    country: "Poland",
    studentVisa: {
      processingTime: "2-4 weeks",
      validity: "Up to 1 year (renewable)",
      fees: "€80",
      requirements: [
        "Valid passport (valid for at least 3 months beyond planned stay)",
        "Completed visa application form",
        "Recent photos (color, 3.5 × 4.5 cm)",
        "University admission confirmation",
        "Proof of payment of tuition fees",
        "Proof of accommodation in Poland",
        "Proof of sufficient funds (minimum 701 PLN per month)",
        "Health insurance valid in Poland",
        "Proof of language proficiency"
      ]
    },
    workVisa: {
      processingTime: "3-5 weeks",
      validity: "Up to 1 year (renewable)",
      fees: "€80",
      requirements: [
        "Valid passport (valid for at least 3 months beyond planned stay)",
        "Completed visa application form",
        "Recent photos (color, 3.5 × 4.5 cm)",
        "Work permit or employer's statement",
        "Employment contract",
        "Proof of qualifications",
        "Health insurance valid in Poland",
        "Proof of accommodation in Poland"
      ]
    }
  },
  {
    country: "Canada",
    studentVisa: {
      processingTime: "8-12 weeks",
      validity: "Duration of course + 90 days",
      fees: "CAD $150",
      requirements: [
        "Letter of Acceptance from a DLI (Designated Learning Institution)",
        "Study permit application",
        "Valid passport",
        "Proof of financial support (tuition plus CAD $10,000 for living expenses)",
        "Police clearance certificate",
        "Medical examination results",
        "Biometrics",
        "SOP (Statement of Purpose)",
        "Proof of language proficiency (IELTS/TOEFL)"
      ]
    },
    workVisa: {
      processingTime: "4-16 weeks",
      validity: "Based on job offer (typically 1-3 years)",
      fees: "CAD $155",
      requirements: [
        "Job offer from Canadian employer",
        "LMIA (Labour Market Impact Assessment) from employer",
        "Work permit application",
        "Valid passport",
        "Proof of qualifications",
        "Police clearance certificate",
        "Medical examination results",
        "Biometrics",
        "Proof of funds for initial settlement"
      ]
    },
    skilledWorkerVisa: {
      processingTime: "6-12 months",
      validity: "Permanent Residence",
      fees: "CAD $1,325 + $500 for right of permanent residence",
      requirements: [
        "Express Entry profile",
        "Language test results (minimum CLB 7)",
        "Education credential assessment",
        "Proof of work experience",
        "Police clearance certificates",
        "Medical examination",
        "Proof of funds (CAD $13,213 for single applicant)",
        "Biometrics",
        "Minimum CRS score to receive ITA (Invitation to Apply)"
      ]
    }
  },
  {
    country: "Australia",
    studentVisa: {
      processingTime: "4-6 weeks",
      validity: "Duration of course + 2 months",
      fees: "AUD $620",
      requirements: [
        "Confirmation of Enrollment (CoE)",
        "Valid passport",
        "GTE (Genuine Temporary Entrant) statement",
        "Proof of financial capacity (tuition fees + AUD $21,041 per year for living)",
        "Health insurance (OSHC)",
        "English proficiency (IELTS 5.5/TOEFL 46/PTE 42)",
        "Academic transcripts",
        "Health examination",
        "Character requirements (police certificates)"
      ]
    },
    workVisa: {
      processingTime: "4-7 months",
      validity: "Up to 4 years",
      fees: "AUD $1,265",
      requirements: [
        "Employer sponsorship (457/TSS visa)",
        "Valid passport",
        "Proof of skills and qualifications",
        "English proficiency (IELTS 5)",
        "Health insurance",
        "Health examination",
        "Character requirements (police certificates)",
        "Job in skilled occupation list",
        "Minimum salary threshold"
      ]
    },
    skilledWorkerVisa: {
      processingTime: "6-12 months",
      validity: "Permanent Residence",
      fees: "AUD $4,045",
      requirements: [
        "Skilled occupation on relevant list",
        "Positive skills assessment",
        "Age under 45",
        "English proficiency (minimum IELTS 6)",
        "Expression of Interest (EOI) through SkillSelect",
        "Invitation to Apply (ITA)",
        "Health examination",
        "Character requirements (police certificates)",
        "Minimum points score (65 points)"
      ]
    }
  },
  {
    country: "United Kingdom",
    studentVisa: {
      processingTime: "3 weeks",
      validity: "Duration of course + 4 months",
      fees: "£363 + Immigration Health Surcharge (£470 per year)",
      requirements: [
        "CAS (Confirmation of Acceptance for Studies) from UK institution",
        "Valid passport",
        "Proof of financial support (tuition fees + £1,334 per month for living in London or £1,023 outside London)",
        "English language proficiency (usually IELTS/TOEFL)",
        "Tuberculosis test certificate (if applicable)",
        "Biometric information",
        "Academic qualifications",
        "ATAS certificate (for certain subjects)"
      ]
    },
    workVisa: {
      processingTime: "3 weeks",
      validity: "Up to 5 years",
      fees: "£625 + Immigration Health Surcharge (£624 per year)",
      requirements: [
        "Certificate of Sponsorship from UK employer",
        "Valid passport",
        "Proof that job meets required skill level (RQF 3 or above)",
        "English language proficiency (B1 level)",
        "Proof of required salary (generally £25,600 or job-specific threshold)",
        "Proof of funds (£1,270) for initial stay",
        "Tuberculosis test certificate (if applicable)",
        "Biometric information"
      ]
    },
    skilledWorkerVisa: {
      processingTime: "3 weeks",
      validity: "Up to 5 years (path to settlement after 5 years)",
      fees: "£625 + Immigration Health Surcharge (£624 per year)",
      requirements: [
        "Certificate of Sponsorship from UK employer",
        "Valid passport",
        "Job in skilled occupation list (RQF 3 or above)",
        "English language proficiency (B1 level)",
        "Minimum salary requirement (£25,600 general threshold or occupation specific)",
        "Proof of funds (£1,270) for initial stay",
        "Tuberculosis test certificate (if applicable)",
        "Biometric information"
      ]
    }
  },
  {
    country: "United States",
    studentVisa: {
      processingTime: "2-5 weeks",
      validity: "Duration of course (D/S - Duration of Status)",
      fees: "$160 + $350 SEVIS fee",
      requirements: [
        "I-20 form from U.S. institution",
        "DS-160 form completed online",
        "Valid passport",
        "Proof of financial support",
        "Academic documents",
        "Intent to return to home country after studies",
        "Passport-sized photograph",
        "English proficiency proof",
        "Visa interview at U.S. Embassy"
      ]
    },
    workVisa: {
      processingTime: "3-6 months",
      validity: "Up to 3 years (H-1B, renewable once)",
      fees: "$190 + $460 (petition fee paid by employer) + additional fees",
      requirements: [
        "Job offer from U.S. employer",
        "H-1B petition approved by USCIS",
        "Valid passport",
        "Bachelor's degree or equivalent",
        "DS-160 form completed online",
        "Proof of ties to home country",
        "Passport-sized photograph",
        "Visa interview at U.S. Embassy"
      ]
    },
    skilledWorkerVisa: {
      processingTime: "6-12 months (plus visa lottery)",
      validity: "Up to 3 years (H-1B, renewable once)",
      fees: "$190 + $460 (petition fee paid by employer) + $500-$4,000 (employer fees)",
      requirements: [
        "Job requiring specialized knowledge",
        "Bachelor's degree or equivalent in specialized field",
        "H-1B petition approved by USCIS",
        "Labor Condition Application (LCA)",
        "Entry in H-1B lottery (if cap applies)",
        "DS-160 form completed online",
        "Valid passport",
        "Visa interview at U.S. Embassy"
      ]
    }
  },
  {
    country: "Singapore",
    studentVisa: {
      processingTime: "2-4 weeks",
      validity: "Duration of course",
      fees: "SGD $90 + SGD $60 issuance fee",
      requirements: [
        "Offer letter from Singapore institution",
        "Completed eForm 16",
        "Valid passport",
        "Passport-sized photograph",
        "Proof of financial ability",
        "Academic certificates",
        "Immigration Medical Examination Report (if required)",
        "Student's Pass Online Application & Registration (SOLAR)"
      ]
    },
    workVisa: {
      processingTime: "3-5 weeks",
      validity: "Up to 2 years (renewable)",
      fees: "SGD $105 + SGD $225 issuance fee",
      requirements: [
        "Job offer from Singapore employer",
        "Employer's application for Employment Pass",
        "Valid passport",
        "Educational certificates",
        "Professional experience details",
        "Passport-sized photograph",
        "Minimum salary requirement (SGD $5,000+)",
        "University degree from reputable institution"
      ]
    },
    skilledWorkerVisa: {
      processingTime: "3 weeks",
      validity: "Up to 2 years (Employment Pass)",
      fees: "SGD $105 + SGD $225 issuance fee",
      requirements: [
        "Job offer from Singapore employer",
        "Minimum monthly salary of SGD $5,000+ (higher for experienced professionals)",
        "Acceptable qualifications (typically university degree)",
        "Valid passport",
        "Company's business profile",
        "Educational certificates",
        "Professional experience details",
        "Passport-sized photograph"
      ]
    }
  },
  {
    country: "New Zealand",
    studentVisa: {
      processingTime: "20-25 working days",
      validity: "Duration of course + 3 months",
      fees: "NZD $330",
      requirements: [
        "Offer of Place from New Zealand institution",
        "Proof of tuition fee payment",
        "Valid passport",
        "Proof of funds (NZD $15,000 per year for living expenses)",
        "Outward travel arrangements or additional funds",
        "Health insurance",
        "Medical certificate (if staying over 12 months)",
        "Police clearance certificate (if staying over 24 months)"
      ]
    },
    workVisa: {
      processingTime: "4-8 weeks",
      validity: "Up to 3 years",
      fees: "NZD $495",
      requirements: [
        "Job offer from New Zealand employer",
        "Proof that no local can do the job",
        "Valid passport",
        "Evidence of qualifications and experience",
        "Proof of English proficiency",
        "Medical certificate",
        "Chest X-ray",
        "Police clearance certificate"
      ]
    },
    skilledWorkerVisa: {
      processingTime: "6-9 months",
      validity: "Permanent Residence",
      fees: "NZD $3,240",
      requirements: [
        "Expression of Interest (EOI)",
        "Invitation to Apply (ITA)",
        "Job on skilled occupation list",
        "Minimum 160 points on points calculator",
        "Valid job offer (in most cases)",
        "Valid passport",
        "Proof of English proficiency (IELTS 6.5)",
        "Medical certificate",
        "Police clearance certificate",
        "Age under 55"
      ]
    }
  },
  {
    country: "South Korea",
    studentVisa: {
      processingTime: "2-4 weeks",
      validity: "Up to 2 years (renewable)",
      fees: "KRW 60,000",
      requirements: [
        "Certificate of Admission from Korean institution",
        "Valid passport",
        "Visa application form",
        "Passport-sized photographs",
        "Proof of financial ability (approximately $10,000 or scholarship)",
        "Academic records",
        "Study plan",
        "TOPIK (Korean language proficiency) result (if required by university)"
      ]
    },
    workVisa: {
      processingTime: "2-4 weeks",
      validity: "Up to 2 years (renewable)",
      fees: "KRW 60,000",
      requirements: [
        "Employment contract",
        "Employer's business registration certificate",
        "Valid passport",
        "Visa application form",
        "Passport-sized photographs",
        "Certificate of degree",
        "Resume and career certificate",
        "Proof of tax payment by company"
      ]
    },
    skilledWorkerVisa: {
      processingTime: "3-5 weeks",
      validity: "Up to 5 years (E-7 visa)",
      fees: "KRW 60,000",
      requirements: [
        "Job offer in one of the designated skilled professions",
        "Valid passport",
        "Visa application form",
        "Passport-sized photographs",
        "Employment contract",
        "Company business registration",
        "Academic and professional certificates",
        "Proof of relevant work experience (3+ years typically)",
        "Criminal background check"
      ]
    }
  }
];

const IndianPassportRequirements: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Indian Passport Holder Visa Guide</h1>
        <p className="text-muted-foreground">
          Comprehensive visa requirement information for Indian passport holders looking to study, 
          work, or apply for skilled worker visas in popular destinations.
        </p>
      </div>

      {countryRequirements.map((country) => (
        <Card key={country.country} className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{country.country}</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student">
              <TabsList className="mb-4">
                <TabsTrigger value="student">Student Visa</TabsTrigger>
                <TabsTrigger value="work">Work Visa</TabsTrigger>
                {country.skilledWorkerVisa && 
                  <TabsTrigger value="skilled">Skilled Worker Visa</TabsTrigger>
                }
              </TabsList>
              
              <TabsContent value="student" className="space-y-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Processing Time</TableHead>
                      <TableHead className="w-1/3">Validity</TableHead>
                      <TableHead className="w-1/3">Fees</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>{country.studentVisa.processingTime}</TableCell>
                      <TableCell>{country.studentVisa.validity}</TableCell>
                      <TableCell>{country.studentVisa.fees}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Requirements</h4>
                  <ul className="space-y-2">
                    {country.studentVisa.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="work" className="space-y-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Processing Time</TableHead>
                      <TableHead className="w-1/3">Validity</TableHead>
                      <TableHead className="w-1/3">Fees</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>{country.workVisa.processingTime}</TableCell>
                      <TableCell>{country.workVisa.validity}</TableCell>
                      <TableCell>{country.workVisa.fees}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Requirements</h4>
                  <ul className="space-y-2">
                    {country.workVisa.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              {country.skilledWorkerVisa && (
                <TabsContent value="skilled" className="space-y-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/3">Processing Time</TableHead>
                        <TableHead className="w-1/3">Validity</TableHead>
                        <TableHead className="w-1/3">Fees</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>{country.skilledWorkerVisa.processingTime}</TableCell>
                        <TableCell>{country.skilledWorkerVisa.validity}</TableCell>
                        <TableCell>{country.skilledWorkerVisa.fees}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-2">Requirements</h4>
                    <ul className="space-y-2">
                      {country.skilledWorkerVisa.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              )}
            </Tabs>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default IndianPassportRequirements;
