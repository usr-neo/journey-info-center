
import React from 'react';
import { ExternalLink, FileText, Globe, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const IndianPassportLinks = () => {
  return (
    <Card className="mb-8">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary" />
          <span>Official Indian Passport Resources</span>
        </CardTitle>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
            <FileText className="h-4 w-4 text-primary" />
            <span>Passport Seva Portal</span>
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            Apply for a new passport, renew your existing passport, or track your application status
          </p>
          <Button asChild variant="outline" className="w-full">
            <a 
              href="https://www.passportindia.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <span>Passport Seva Online Portal</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <div className="pt-2">
          <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span>Visa Enquiries</span>
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            Get information about visa requirements for Indian passport holders
          </p>
          <Button asChild variant="outline" className="w-full">
            <a 
              href="https://www.mea.gov.in/visa-services.htm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <span>Ministry of External Affairs</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default IndianPassportLinks;
