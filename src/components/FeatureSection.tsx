"use client";

import { Users, Bot, MessageCircle, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Real Communities, Not Noise",
    desc: "Join focused Circles that match your interests and passions, without the endless scrolling."
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "AI That Gets You",
    desc: "Let our smart AI guide you to the right people and conversations that truly matter to you."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Find Your People Fast",
    desc: "Connect instantly with a global community of creators, learners, and builders."
  }
];

export default function FeatureSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-headline mb-12 text-foreground"
          data-translate
        >
          Why Circle?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
             <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center h-full bg-secondary border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="flex justify-center items-center pb-4">
                  {f.icon}
                </CardHeader>
                <CardTitle className="text-xl font-semibold mb-2" data-translate>{f.title}</CardTitle>
                <CardContent>
                  <p className="text-muted-foreground" data-translate>{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
