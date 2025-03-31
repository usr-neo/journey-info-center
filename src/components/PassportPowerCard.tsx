
import React from 'react';
import { Link } from 'react-router-dom';
import { PassportRanking } from '@/data/passportRankings';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Trophy, Globe, ChevronRight, Unlock, Map, Shield } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface PassportPowerCardProps {
  passport: PassportRanking;
  isDetailed?: boolean;
}

const PassportPowerCard: React.FC<PassportPowerCardProps> = ({ passport, isDetailed = false }) => {
  const maxPossibleAccess = 200; // Hypothetical maximum number of countries
  const accessPercentage = (passport.totalAccess / maxPossibleAccess) * 100;

  return (
    <Card className={`h-full flex flex-col ${passport.rank <= 3 ? 'border-amber-400 dark:border-amber-600' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">{passport.flag}</span>
            <div>
              <CardTitle className="flex items-center gap-2">
                {passport.name}
                {passport.rank <= 3 && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Trophy className="h-5 w-5 text-amber-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Top-Tier Passport</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="font-bold">
                  Rank #{passport.rank}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-2xl font-bold text-primary">{passport.powerScore}</div>
            <div className="text-xs text-muted-foreground">Power Score</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-4 flex-grow">
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Global Access</span>
            <span className="text-sm font-medium">{passport.totalAccess} countries</span>
          </div>
          <Progress value={accessPercentage} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="p-2 border rounded-md text-center">
            <div className="flex justify-center text-primary mb-1">
              <Unlock className="h-4 w-4" />
            </div>
            <div className="text-lg font-bold">{passport.visaFreeAccess}</div>
            <div className="text-xs text-muted-foreground">Visa Free</div>
          </div>
          <div className="p-2 border rounded-md text-center">
            <div className="flex justify-center text-primary mb-1">
              <Map className="h-4 w-4" />
            </div>
            <div className="text-lg font-bold">{passport.visaOnArrival}</div>
            <div className="text-xs text-muted-foreground">Visa on Arrival</div>
          </div>
          <div className="p-2 border rounded-md text-center">
            <div className="flex justify-center text-primary mb-1">
              <Globe className="h-4 w-4" />
            </div>
            <div className="text-lg font-bold">{passport.eVisaAccess}</div>
            <div className="text-xs text-muted-foreground">e-Visa</div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Experience Points: {passport.experiencePoints} XP</span>
        </div>

        {isDetailed && (
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Required Documents:</h3>
            <ul className="text-sm space-y-1 list-disc list-inside">
              {passport.documents.map((doc, index) => (
                <li key={index} className="text-muted-foreground">{doc}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      {!isDetailed && (
        <CardFooter className="pt-2 mt-auto">
          <Button asChild variant="outline" className="w-full">
            <Link to={`/passport-ranking/${passport.countryId}`} className="flex items-center justify-between">
              <span>View details</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default PassportPowerCard;
