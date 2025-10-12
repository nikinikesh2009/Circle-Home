
import { Button } from '@/components/ui/button';
import { logout } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BadgeCheck } from 'lucide-react';

export default function AdminDashboardPage() {
  
  async function handleLogout() {
    'use server';
    await logout();
    redirect('/admin');
  }

  return (
    <div className="min-h-screen bg-secondary dark:bg-background p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
                <BadgeCheck className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-3xl font-bold font-headline text-primary">ACO Admin Dashboard</CardTitle>
            <CardDescription className="text-lg">Access Granted</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-8 text-muted-foreground">You have successfully passed all security layers.</p>
          <form action={handleLogout}>
            <Button variant="destructive" type="submit">
              Log Out
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
