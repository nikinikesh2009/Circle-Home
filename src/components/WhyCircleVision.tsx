"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

export default function WhyCircleVision() {
    return (
        <motion.section 
            className="py-12 text-center max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl font-bold font-headline text-primary animate-glow mb-6">This Is Just the Beginning.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Circle will expand across every interest and every country. AI will make finding the right people effortless. This will be the future of real digital connection.
            </p>
            <Button variant="outline" asChild>
                <Link href="#">Read Our Roadmap</Link>
            </Button>
        </motion.section>
    );
}
