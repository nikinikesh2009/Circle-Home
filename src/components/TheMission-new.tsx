"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket, Heart } from "lucide-react";

const missions = [
  {
    icon: Target,
    title: "Our Goal",
    description: "To create a platform where people can find and connect with others who truly share their interests and values."
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    description: "Using AI to facilitate meaningful connections while keeping humans at the center of every interaction."
  },
  {
    icon: Rocket,
    title: "Our Vision",
    description: "A world where technology brings people together for genuine connection, not just engagement metrics."
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Authenticity, community, and meaningful relationships over likes, follows, and vanity metrics."
  }
];

export default function TheMission() {
  return (
    <section className="py-14 lg:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <Rocket className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Mission</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Building the <span className="gradient-text">Future</span> of Connection
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            We believe technology should bring people together, not drive them apart. 
            Here's how we're making that happen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {missions.map((mission, idx) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl hover:shadow-xl transition-all duration-300 group hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-primary to-secondary group-hover:shadow-lg transition-all">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline font-semibold text-xl mb-2">{mission.title}</h3>
                    <p className="text-muted-foreground">{mission.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass p-8 lg:p-12 rounded-2xl max-w-5xl mx-auto text-center border-primary/20"
        >
          <p className="text-3xl lg:text-4xl font-serif italic text-foreground leading-relaxed mb-6">
            "If we ain't, who do?"
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This isn't just our motto—it's our responsibility. We're building Circle because 
            someone needs to fix how people connect online. And if not us, then who?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
