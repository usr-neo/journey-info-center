
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { passportRankings, PassportRanking } from '@/data/passportRankings';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PassportPowerCard from '@/components/PassportPowerCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, Award, FileText, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PassportDetailPage = () => {
  const { passportId } = useParams<{ passportId: string }>();
  const [passport, setPassport] = useState<PassportRanking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this might be an API call
    const foundPassport = passportRankings.find(p => p.countryId === passportId) || null;
    setPassport(foundPassport);
    setLoading(false);
  }, [passportId]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-12 text-center">
          <p>Loading passport information...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!passport) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Passport Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find information for the specified passport.</p>
          <Button asChild>
            <Link to="/passport-ranking">View All Passports</Link>
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
            <Link to="/passport-ranking" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              <span>Back to Rankings</span>
            </Link>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
          <div className="lg:w-2/3">
            <div className="mb-8">
              <PassportPowerCard passport={passport} isDetailed={true} />
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Passport Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Award className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Global Mobility</h3>
                      <p className="text-sm text-muted-foreground">
                        Access to {passport.totalAccess} countries worldwide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Award className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Visa-Free Champion</h3>
                      <p className="text-sm text-muted-foreground">
                        {passport.visaFreeAccess} countries without visa requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Award className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Power Rank</h3>
                      <p className="text-sm text-muted-foreground">
                        Ranked #{passport.rank} worldwide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Award className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">XP Leader</h3>
                      <p className="text-sm text-muted-foreground">
                        {passport.experiencePoints} experience points accumulated
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Passport Processing Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-1">Standard Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      4-6 weeks processing time
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">Expedited Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      2-3 weeks processing time (additional fee required)
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">Emergency Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Available for life-or-death emergencies or urgent travel (proof required)
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">Renewal Process</h3>
                    <p className="text-sm text-muted-foreground">
                      Can be renewed up to 9 months before expiration, similar documents required
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-1/3">
            <div className="sticky top-20">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {passport.documents.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Separator className="my-4" />
                  
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2">
                      <span className="font-medium">Validity:</span> 10 years for adults, 5 years for minors under 16
                    </p>
                    <p>
                      <span className="font-medium">Note:</span> Additional documentation may be required in special circumstances
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Level Up Your XP</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete these objectives to increase your passport's power level:
                  </p>
                  <ul className="space-y-2">
                    <li className="p-2 border rounded-md flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Apply for Global Entry or similar programs</span>
                    </li>
                    <li className="p-2 border rounded-md flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Obtain a second citizenship</span>
                    </li>
                    <li className="p-2 border rounded-md flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Maintain a clean travel record</span>
                    </li>
                    <li className="p-2 border rounded-md flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Keep passport valid and in good condition</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
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

export default PassportDetailPage;
