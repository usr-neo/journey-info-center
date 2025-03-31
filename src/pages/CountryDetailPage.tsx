
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, Globe, AlertCircle, ExternalLink } from 'lucide-react';
import { countries, Country } from '@/data/countries';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VisaTypesTable from '@/components/VisaTypesTable';
import VisaRequirementsCard from '@/components/VisaRequirementsCard';
import ApplicationSteps from '@/components/ApplicationSteps';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const CountryDetailPage = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this might be an API call
    const foundCountry = countries.find(c => c.id === countryId) || null;
    setCountry(foundCountry);
    setLoading(false);
  }, [countryId]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-12 text-center">
          <p>Loading country information...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!country) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Country Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find information for the specified country.</p>
          <Button asChild>
            <Link to="/countries">View All Countries</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-12">
        <div className="flex items-center gap-2 mb-8">
          <Button asChild variant="outline" size="sm">
            <Link to="/countries" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              <span>Back to Countries</span>
            </Link>
          </Button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{country.flag}</span>
              <div>
                <h1 className="text-3xl font-bold">{country.name}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <Badge>{country.continent}</Badge>
                </div>
              </div>
            </div>
            
            <Alert className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Important</AlertTitle>
              <AlertDescription>
                Visa requirements and processes can change frequently. Always verify this information with the official embassy or consulate website before making travel plans.
              </AlertDescription>
            </Alert>
            
            <h2 className="text-2xl font-bold mb-4">Visa Types</h2>
            <VisaTypesTable visaTypes={country.visaTypes} />
            
            <div className="mt-8 mb-4">
              <h2 className="text-2xl font-bold mb-4">Application Process</h2>
              <ApplicationSteps steps={country.applicationProcess} />
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
              <p className="text-muted-foreground">{country.additionalInfo}</p>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="sticky top-20">
              <VisaRequirementsCard requirements={country.requirements} />
              
              <div className="mt-6 p-4 border rounded-lg">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Official Embassy Website</span>
                </h3>
                <Separator className="mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  Visit the official embassy website for the most up-to-date information and application forms.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a 
                    href={country.embassyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>Visit Official Website</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default CountryDetailPage;
