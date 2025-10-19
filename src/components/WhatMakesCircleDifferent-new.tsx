"use client";

import { motion } from "framer-motion";
import { Bot, Shield, Zap, Users, Globe, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Matching",
    description: "Our intelligent algorithm connects you with people who truly share your interests and values."
  },
  {
    icon: Shield,
    title: "Safe & Moderated",
    description: "AI moderation and community guidelines keep conversations positive and relevant."
  },
  {
    icon: Zap,
    title: "No Algorithm Games",
    description: "No infinite scroll, no ads, no manipulation. Just real connections."
  },
  {
    icon: Users,
    title: "Quality Over Quantity",
    description: "Small, focused communities instead of massive, impersonal groups."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with people worldwide who share your specific interests and goals."
  },
  {
    icon: Heart,
    title: "Built for Connection",
    description: "Designed from the ground up to foster genuine relationships, not just engagement."
  }
];

export default function WhatMakesCircleDifferent() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <div className="text-center mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            What Makes Circle <span className="gradient-text">Different</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            We're not another social media platform. We're building a new way to connect based on shared interests, not endless feeds.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass hover:shadow-xl transition-all duration-300 group hover:border-primary/50">
                  <CardHeader>
                    <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 w-fit group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base pt-2">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="glass p-8 lg:p-10 rounded-2xl max-w-4xl mx-auto border-primary/20">
            <p className="text-2xl lg:text-3xl font-serif italic text-foreground leading-relaxed">
              "We're not trying to keep you scrolling. We're trying to help you connect."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
