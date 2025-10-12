"use client";

import { Users, Bot, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Interest Circles",
    desc: "Join circles based on your passions — from tech to fitness to anything you love."
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "AI Assistance",
    desc: "Your personal AI guide helps you find circles, stay productive, and connect faster."
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-primary" />,
    title: "Smart Conversations",
    desc: "Chat freely, create meaningful connections, and let AI moderate fairly."
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
                <CardTitle className="text-xl font-semibold mb-2">{f.title}</CardTitle>
                <CardContent>
                  <p className="text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
