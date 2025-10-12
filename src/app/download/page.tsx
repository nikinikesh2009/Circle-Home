
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, AlertTriangle } from "lucide-react";

export default function DownloadPage() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary animate-glow">
          Download Circle
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Get the official Circle app and join communities that match your passion.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-6 justify-center my-10">
        <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-8">
          <a href="#">
            <Download className="mr-2" /> Download for Android
          </a>
        </Button>
        <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-950 dark:bg-gray-300 dark:hover:bg-gray-100 dark:text-black text-white text-lg py-6 px-8">
          <a href="#">
            <Download className="mr-2" /> Download for iOS
          </a>
        </Button>
      </div>

      <Card className="max-w-lg mx-auto bg-secondary border-border/50 text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Version 1.0.0</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Released on October 2025</p>
          <p className="mt-4 text-sm font-semibold">
            ✨ New Circle System • 🐞 Bug Fixes • ⚡️ Performance Upgrades
          </p>
        </CardContent>
      </Card>

      <div className="mt-12 flex items-center justify-center gap-3 text-muted-foreground">
        <AlertTriangle className="h-5 w-5 text-amber-500" />
        <p className="text-sm">
          Only download Circle from official links to protect your account and data.
        </p>
      </div>
    </div>
  );
}
