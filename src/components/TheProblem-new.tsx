"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Eye, Brain, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    stat: "70%",
    title: "Feel Lonelier Than Ever",
    description: "Despite being more 'connected' online, people report record levels of loneliness."
  },
  {
    icon: Eye,
    stat: "3hrs+",
    title: "Wasted on Scrolling",
    description: "Average daily time spent on social media with little meaningful interaction."
  },
  {
    icon: Brain,
    stat: "85%",
    title: "Algorithm Fatigue",
    description: "Users feel manipulated by algorithms designed for engagement, not connection."
  },
  {
    icon: TrendingDown,
    stat: "60%",
    title: "Declining Quality",
    description: "People report decreasing quality of online relationships and interactions."
  }
];

export default function TheProblem() {
  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-4"
          >
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">The Problem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Social Media is <span className="gradient-text">Broken</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Current platforms prioritize engagement over connection, leaving users feeling empty and disconnected.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:border-destructive/30 text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-destructive/10 mb-4 group-hover:bg-destructive/20 transition-colors">
                  <Icon className="h-8 w-8 text-destructive" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{problem.stat}</div>
                <h3 className="font-headline font-semibold text-lg mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16"
        >
          <div className="glass p-8 lg:p-10 rounded-2xl max-w-4xl mx-auto text-center border-destructive/20">
            <p className="text-xl lg:text-2xl font-serif italic text-foreground leading-relaxed">
              "We're more connected than ever, yet we've never felt more alone."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
