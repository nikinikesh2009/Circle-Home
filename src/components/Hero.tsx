"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold font-headline mb-6 text-foreground animate-glow"
        >
          Meet People Who Share Your Passion
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Circle is a next-generation platform to connect, chat, and grow together — powered by smart AI and vibrant communities.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="/download">Download App</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
