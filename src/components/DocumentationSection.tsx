
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, CreditCard, Clock, Users, Flag, Navigation } from 'lucide-react';

const commonDocuments = [
  {
    title: "Passport",
    description: "A valid passport with at least 6 months validity beyond your intended stay",
    icon: FileText
  },
  {
    title: "Visa Application Form",
    description: "Accurately completed visa application form with no blank fields",
    icon: FileText
  },
  {
    title: "Passport Photos",
    description: "Recent passport-sized photos meeting country-specific requirements",
    icon: Users
  },
  {
    title: "Proof of Financial Means",
    description: "Bank statements, sponsorship letters, or other evidence of ability to support your stay",
    icon: CreditCard
  },
  {
    title: "Travel Itinerary",
    description: "Round-trip flight reservations and detailed travel plan",
    icon: Navigation
  },
  {
    title: "Accommodation Proof",
    description: "Hotel bookings or invitation letter from host with their contact information",
    icon: Flag
  },
  {
    title: "Travel Insurance",
    description: "Medical coverage for the entire duration of your stay",
    icon: FileText
  },
  {
    title: "Processing Time",
    description: "Apply well in advance of your travel date, typically 4-8 weeks before departure",
    icon: Clock
  }
];

const DocumentationSection = () => {
  return (
    <div className="container py-12">
      <h2 className="text-3xl font-bold mb-6">Essential Visa Documentation</h2>
      <p className="text-muted-foreground mb-8">
        Most countries require these standard documents for visa applications, though specific requirements may vary.
        Always check the official embassy or consulate website for the most up-to-date information.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {commonDocuments.map((doc, index) => (
          <Card key={index} className="h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <doc.icon className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{doc.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{doc.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 p-6 border rounded-lg bg-muted/50">
        <h3 className="text-xl font-medium mb-3">Additional Documents May Include:</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 list-disc list-inside">
          <li>Letter of employment or enrollment</li>
          <li>Income tax returns</li>
          <li>Marriage certificate (if applicable)</li>
          <li>Birth certificates of children (if applicable)</li>
          <li>Invitation letter from host/company</li>
          <li>Detailed travel itinerary</li>
          <li>Previous visa copies (if applicable)</li>
          <li>Proof of property ownership in home country</li>
          <li>Vaccination certificates (if required)</li>
          <li>Police clearance certificate</li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentationSection;
