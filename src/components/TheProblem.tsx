"use client";
import { motion } from "framer-motion";

export default function TheProblem() {
  return (
    <motion.section 
      className="py-12 text-center max-w-4xl mx-auto px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold font-headline text-primary animate-glow mb-6">
        Social Media Forgot Connection.
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Noise. Spam. Toxicity. Most platforms are built for endless content, not genuine connection. They leave you scrolling through feeds instead of finding like-minded people.
      </p>
      <div className="bg-secondary p-6 rounded-lg border border-border/50 max-w-3xl mx-auto">
        <p className="text-xl italic text-foreground leading-relaxed">
          “Most platforms are built for content, not connection. Circle is built for <strong className="text-primary">you</strong> — and the people who share your passion.”
        </p>
      </div>
    </motion.section>
  );
}
