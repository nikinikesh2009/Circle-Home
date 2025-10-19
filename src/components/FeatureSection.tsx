"use client";

import { Users, Bot, MessageCircle, Heart, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: Heart,
    title: "Real Communities, Not Noise",
    desc: "Join focused Circles that match your interests and passions, without the endless scrolling."
  },
  {
    icon: Bot,
    title: "AI That Gets You",
    desc: "Let our smart AI guide you to the right people and conversations that truly matter to you."
  },
  {
    icon: Users,
    title: "Find Your People Fast",
    desc: "Connect instantly with a global community of creators, learners, and builders."
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    desc: "Your data and privacy are protected with enterprise-grade security and AI moderation."
  },
  {
    icon: MessageCircle,
    title: "Meaningful Conversations",
    desc: "Engage in discussions that matter with people who share your genuine interests."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Experience seamless real-time connections with our optimized platform infrastructure."
  }
];

export default function FeatureSection() {
  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Why Choose <span className="gradient-text">Circle</span>?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover the features that make Circle the best platform for building meaningful connections
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
                <Card className="h-full glass hover:shadow-lg transition-all duration-300 group hover:border-primary/50">
                  <CardHeader>
                    <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
