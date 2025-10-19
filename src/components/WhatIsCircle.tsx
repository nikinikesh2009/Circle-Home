"use client";

import { Dumbbell, BrainCircuit, HeartHandshake, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const interests = [
    { icon: Dumbbell, name: "Fitness Lovers" },
    { icon: BrainCircuit, name: "Programmers" },
    { icon: HeartHandshake, name: "Relationship Support" },
    { icon: Rocket, name: "Entrepreneurs" },
    { icon: Users, name: "Students" },
]

export default function WhatIsCircle() {
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
            What is <span className="gradient-text">Circle</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Circle is not just another social media app. It's a next-generation community platform 
            where users join "Circles" — curated spaces based on shared interests, goals, or passions.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {interests.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl glass hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <p className="font-semibold text-sm text-center">{item.name}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass p-8 lg:p-10 rounded-2xl max-w-4xl mx-auto text-center border-primary/20"
        >
          <p className="text-xl lg:text-2xl font-serif italic text-foreground leading-relaxed">
            "Bring the right people together — and let real connections build everything else."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
