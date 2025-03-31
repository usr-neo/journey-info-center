
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Country } from '@/data/countries';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <Card className={`visa-card h-full ${country.featured ? 'visa-card-featured' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">{country.flag}</span>
            <CardTitle>{country.name}</CardTitle>
          </div>
          <Badge variant="outline">{country.continent}</Badge>
        </div>
        <CardDescription className="mt-2">
          {country.visaTypes.length} visa types available
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <h3 className="text-sm font-medium mb-2">Popular visa types:</h3>
        <ul className="space-y-1">
          {country.visaTypes.slice(0, 2).map((visaType) => (
            <li key={visaType.name} className="text-sm">
              <span className="font-medium">{visaType.name}</span>: {visaType.processingTime}, {visaType.fees}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto pt-0">
        <Button asChild className="w-full" variant="outline">
          <Link to={`/country/${country.id}`} className="flex items-center justify-between">
            <span>View requirements</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CountryCard;
