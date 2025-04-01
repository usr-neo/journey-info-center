
import React from 'react';
import { ExternalLink, Globe, Passport } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface CountryEmbassyLinksProps {
  embassyLink: string;
  countryName: string;
}

const CountryEmbassyLinks: React.FC<CountryEmbassyLinksProps> = ({ embassyLink, countryName }) => {
  // Extract visa application link if it exists, otherwise use embassy link
  const visaPortalLink = embassyLink.includes('visa') ? 
    embassyLink : 
    `${embassyLink}${embassyLink.endsWith('/') ? '' : '/'}visa`;

  return (
    <Card className="mt-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary" />
          <span>Official Resources</span>
        </CardTitle>
        <CardDescription>
          Access official websites for visa applications and embassy information
        </CardDescription>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
            <Passport className="h-4 w-4 text-primary" />
            <span>Visa Application Portal</span>
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            Apply for visas and check application requirements on the official visa portal
          </p>
          <Button asChild variant="outline" className="w-full">
            <a 
              href={visaPortalLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <span>Visit Visa Portal</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <div className="pt-2">
          <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
            <Globe className="h-4 w-4 text-primary" />
            <span>Embassy Information</span>
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            Contact the {countryName} embassy for consular services and official information
          </p>
          <Button asChild variant="outline" className="w-full">
            <a 
              href={embassyLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <span>Embassy Website</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountryEmbassyLinks;
