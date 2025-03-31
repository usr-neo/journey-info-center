
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface VisaRequirementsCardProps {
  requirements: string[];
  title?: string;
}

const VisaRequirementsCard: React.FC<VisaRequirementsCardProps> = ({ 
  requirements, 
  title = "Required Documents" 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {requirements.map((requirement, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{requirement}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default VisaRequirementsCard;
