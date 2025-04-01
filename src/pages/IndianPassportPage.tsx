
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IndianPassportRequirements from '@/components/IndianPassportRequirements';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { FileCheck, Clock, Globe } from 'lucide-react';

const IndianPassportPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-8">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Indian Passport Guide</h1>
        </div>
        
        <p className="text-muted-foreground mb-8">
          A comprehensive guide to visa requirements for Indian passport holders, with detailed information 
          on student visas, work permits, and skilled worker programs for popular destinations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <FileCheck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Detailed Requirements</h3>
                <p className="text-muted-foreground">
                  Complete documentation checklists for each visa type and country, ensuring you have everything needed for a successful application.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Processing Times</h3>
                <p className="text-muted-foreground">
                  Up-to-date information on visa processing times for different countries, helping you plan your application timeline effectively.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Country-Specific Guides</h3>
                <p className="text-muted-foreground">
                  Tailored information for Indian passport holders applying for visas to popular destinations worldwide.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Separator className="my-8" />
        
        <IndianPassportRequirements />
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default IndianPassportPage;
