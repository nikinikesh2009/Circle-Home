"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, GraduationCap, HeartHandshake, Dumbbell } from "lucide-react";

const scenarios = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    role: "Developer",
    desc: "Joins a Python Circle, finds a collaborator, and builds a project they're passionate about.",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    role: "Student",
    desc: "Finds study buddies in a learning Circle to ace exams and grow together.",
  },
  {
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
    role: "Fitness Lover",
    desc: "Connects with local gym-goers for motivation and real-life workout sessions.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    role: "Someone who needs support",
    desc: "Finds a safe, private Circle to share experiences and get advice from people who understand.",
  }
];

export default function RealScenarios() {
  return (
    <motion.section 
      className="py-12 max-w-5xl mx-auto px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold font-headline text-primary animate-glow">Made for Real People</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Circle isn’t about algorithms deciding what you see. It’s about you choosing your world.
        </p>
      </header>
      <div className="grid md:grid-cols-2 gap-8">
        {scenarios.map((scenario, index) => (
          <Card key={index} className="bg-secondary border-border/50">
            <CardHeader className="flex flex-row items-center gap-4">
              {scenario.icon}
              <CardTitle>{scenario.role}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{scenario.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
