
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleIcon } from 'lucide-react';

interface AuthCardProps {
  stage: number;
  title: string;
  description: string;
  errorMessage?: string;
  children: ReactNode;
}

export default function AuthCard({ stage, title, description, errorMessage, children }: AuthCardProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary dark:bg-background px-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <CircleIcon className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline">ACO Admin Security</span>
          </div>
          <p className="text-sm font-semibold text-muted-foreground">Layer {stage} of 5</p>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {errorMessage && (
            <div className="bg-destructive/10 text-destructive p-3 rounded-md mb-4 text-center text-sm">
              {errorMessage}
            </div>
          )}
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
