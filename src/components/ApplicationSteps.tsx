
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ApplicationStepsProps {
  steps: string[];
  title?: string;
}

const ApplicationSteps: React.FC<ApplicationStepsProps> = ({ 
  steps, 
  title = "Application Process" 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                {index + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};

export default ApplicationSteps;
