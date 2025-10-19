"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { CircleIcon, Sparkles, Users, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">The Future of Social Connection</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 leading-tight"
            >
              Meet People Who <br className="hidden lg:block" />
              <span className="gradient-text">Share Your Passion</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              A fast, secure, and user-friendly platform to build meaningful connections. 
              Join thousands embracing the future of interest-based communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                <Link href="/download">Get Started</Link>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/5 w-full sm:w-auto"
              >
                <Link href="/why-circle">Learn More</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8"
            >
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-bold text-lg">10K+</p>
                  <p className="text-xs text-muted-foreground">Active Users</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CircleIcon className="h-5 w-5 text-secondary" />
                <div>
                  <p className="font-bold text-lg">500+</p>
                  <p className="text-xs text-muted-foreground">Communities</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-bold text-lg">99.9%</p>
                  <p className="text-xs text-muted-foreground">Uptime</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
              
              {/* Main visual element */}
              <div className="relative glass rounded-2xl p-8 shadow-2xl">
                <CircleIcon className="w-full h-full text-primary opacity-20" strokeWidth={0.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <CircleIcon className="h-32 w-32 mx-auto text-primary mb-4" />
                    <h3 className="font-headline font-bold text-2xl gradient-text">Circle</h3>
                    <p className="text-muted-foreground mt-2">Connect. Create. Grow.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
