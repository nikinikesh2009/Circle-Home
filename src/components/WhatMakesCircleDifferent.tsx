"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, FilterX, Users, ShieldCheck, Heart } from "lucide-react";

const differentiators = [
  {
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    title: "AI-Matched Communities",
    desc: "Meet the right people faster."
  },
  {
    icon: <FilterX className="h-6 w-6 text-primary" />,
    title: "Zero Feed Spam",
    desc: "No random noise, just focus."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "Private & Verified Circles",
    desc: "Safe, trusted environments."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Global + Local Discovery",
    desc: "Meet people near or worldwide."
  },
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Real Relationships",
    desc: "Not followers. Real bonds."
  },
];

export default function WhatMakesCircleDifferent() {
  return (
    <motion.section 
      className="py-12 max-w-5xl mx-auto px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold font-headline text-primary animate-glow">What Makes Circle Stand Out</h2>
      </header>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-[repeat(5,minmax(0,1fr))] gap-4">
          {differentiators.map((d, i) => (
            <div key={i} className="flex flex-col text-center items-center p-4">
              <div className="bg-secondary p-3 rounded-full mb-3 border border-border/50">
                {d.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{d.title}</h3>
              <p className="text-sm text-muted-foreground">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
