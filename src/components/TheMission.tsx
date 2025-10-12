"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BrainCircuit, ShieldCheck, Globe } from "lucide-react";

const features = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Focused Interests",
    desc: "Circles are built around passions, not random content."
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "AI-Driven Matching",
    desc: "No random noise, just connections that matter to you."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Safe Spaces",
    desc: "AI moderation ensures cleaner, more positive conversations."
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Global + Local",
    desc: "Find your people anywhere in the world, or right next door."
  }
];

export default function TheMission() {
  return (
    <motion.section 
      className="py-12 max-w-5xl mx-auto px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold font-headline text-primary animate-glow">We’re Here to Build Real Communities</h2>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 text-center h-full bg-secondary border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader className="flex justify-center items-center pb-4">
                {feature.icon}
              </CardHeader>
              <CardTitle className="text-xl font-semibold mb-2">{feature.title}</CardTitle>
              <CardContent>
                <p className="text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
