"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, QrCode } from "lucide-react";
import QRCode from "qrcode.react";

export default function WhyCircleCTA() {
  const pageLink = typeof window !== "undefined" ? window.location.origin + "/download" : "";

  return (
    <motion.section
      className="py-20 text-center px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary animate-glow">
          Start Your Circle Today.
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join the movement that brings people together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button asChild size="lg">
            <Link href="/download">
              <Download className="mr-2" />
              Download App
            </Link>
          </Button>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white p-2 rounded-lg border shadow-sm">
                 <QRCode value={pageLink} size={80} fgColor="#000000" bgColor="#ffffff" />
            </div>
            <p className="text-xs text-muted-foreground font-semibold inline-flex items-center gap-1"><QrCode size={14}/> Scan to Download</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
