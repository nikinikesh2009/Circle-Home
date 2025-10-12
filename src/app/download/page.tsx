"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, AlertTriangle, Copy, Share2, Smartphone, Apple, QrCode } from "lucide-react";
import QRCode from "qrcode.react";
import { useToast } from "@/hooks/use-toast";

export default function DownloadPage() {
  const [os, setOs] = useState<"android" | "ios" | "unknown">("unknown");
  const { toast } = useToast();

  const androidLink = "#"; // Placeholder for Android link
  const iosLink = "#"; // Placeholder for iOS link
  const pageLink = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/android/.test(userAgent)) {
      setOs("android");
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      setOs("ios");
    }
  }, []);

  const downloadLink = os === "android" ? androidLink : os === "ios" ? iosLink : pageLink;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageLink);
      toast({
        title: "Link Copied!",
        description: "The download link has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Copy Failed",
        description: "Could not copy the link to your clipboard.",
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Download Circle",
          text: "Join communities that match your passion with the Circle app.",
          url: pageLink,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
       // Fallback to copy link if share API is not available
      await handleCopy();
    }
  };

  const renderButtons = () => {
    if (os === "android") {
      return (
        <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-8 w-full max-w-sm">
          <a href={androidLink}>
            <Smartphone className="mr-2" /> Download for Android
          </a>
        </Button>
      );
    }
    if (os === "ios") {
      return (
        <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-950 dark:bg-gray-300 dark:hover:bg-gray-100 dark:text-black text-white text-lg py-6 px-8 w-full max-w-sm">
          <a href={iosLink}>
            <Apple className="mr-2" /> Download for iOS
          </a>
        </Button>
      );
    }
    // Desktop / Unknown
    return (
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-8">
          <a href={androidLink}>
            <Smartphone className="mr-2" /> Download for Android
          </a>
        </Button>
        <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-950 dark:bg-gray-300 dark:hover:bg-gray-100 dark:text-black text-white text-lg py-6 px-8">
          <a href={iosLink}>
            <Apple className="mr-2" /> Download for iOS
          </a>
        </Button>
      </div>
    );
  };


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

      <div className="my-10">
        {renderButtons()}
      </div>

       {os === 'unknown' && (
        <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-muted-foreground font-semibold inline-flex items-center gap-2"><QrCode /> Scan to download on your device</p>
            <div className="bg-white p-3 rounded-lg border shadow-md">
                 <QRCode value={pageLink} size={140} fgColor="#000000" bgColor="#ffffff" />
            </div>
        </div>
      )}

       <div className="mt-12 flex justify-center gap-4">
          <Button variant="outline" onClick={handleCopy}>
            <Copy className="mr-2" /> Copy Link
          </Button>
          <Button variant="outline" onClick={handleShare}>
            <Share2 className="mr-2" /> Share
          </Button>
        </div>

      <Card className="max-w-lg mx-auto bg-secondary border-border/50 text-center mt-16">
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
