"use client";

import { motion } from "framer-motion";
import { CircleIcon, UserPlus, Search, MessageSquare, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and tell us about your interests, passions, and goals."
  },
  {
    icon: Search,
    title: "Discover Circles",
    description: "Browse or let our AI recommend Circles that match your interests perfectly."
  },
  {
    icon: MessageSquare,
    title: "Join & Engage",
    description: "Jump into conversations, share ideas, and connect with like-minded people."
  },
  {
    icon: CheckCircle,
    title: "Build Relationships",
    description: "Form meaningful connections and grow together with your community."
  }
];

export default function HowCirclesWork() {
  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4"
          >
            <CircleIcon className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">How It Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Getting Started is <span className="gradient-text">Simple</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Four easy steps to start building meaningful connections
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:border-primary/50 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-secondary group-hover:shadow-lg transition-all">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-primary/20 mb-2">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-headline font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                {/* Connector Line (hidden on last item and mobile) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
