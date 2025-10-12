
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Globe, Lightbulb, Users, Heart } from "lucide-react";

const jobOpenings = [
  {
    title: "Senior Full-Stack Engineer",
    location: "Remote",
    department: "Engineering",
  },
  {
    title: "Product Designer (UI/UX)",
    location: "Remote",
    department: "Design",
  },
  {
    title: "Community Manager",
    location: "Remote",
    department: "Marketing",
  },
];

const companyValues = [
    {
        icon: <Heart className="h-8 w-8 text-primary" />,
        title: "Connection First",
        description: "We build tools that bring people together in meaningful ways."
    },
    {
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
        title: "Innovate with Purpose",
        description: "We use technology, especially AI, to solve real human problems."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Community-Driven",
        description: "Our users are at the heart of everything we build."
    },
    {
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: "Global & Inclusive",
        description: "We're creating a space for everyone, everywhere."
    }
]

export default function CareersPage() {
  return (
    <div className="space-y-20">
      <motion.section
        className="text-center py-20 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6 text-primary animate-glow">
            Join Our Mission
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            We're building the future of social connection, powered by AI and a passion for real community. If you're a builder, a dreamer, or a creator, there's a place for you at Circle.
          </p>
          <Button size="lg">View Open Roles</Button>
        </div>
      </motion.section>

      <motion.section 
        className="py-12 max-w-5xl mx-auto px-4"
         initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
       >
         <header className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline">Why You'll Love Working Here</h2>
            <p className="text-lg text-muted-foreground mt-2">We're more than a company. We're a circle.</p>
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
                 <Card key={index} className="p-6 text-center h-full bg-secondary border-border/50 hover:border-primary/50 transition-colors duration-300">
                    <CardHeader className="flex justify-center items-center pb-4">
                        {value.icon}
                    </CardHeader>
                    <CardTitle className="text-xl font-semibold mb-2">{value.title}</CardTitle>
                    <CardContent>
                        <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </motion.section>

      <motion.section
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline">Current Openings</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Find the role where you can make an impact.
          </p>
        </header>
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="bg-secondary border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                  <p className="text-muted-foreground mt-1">
                    {job.department} &middot; {job.location}
                  </p>
                </div>
                <Button variant="outline" className="mt-4 md:mt-0">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
           <div className="text-center pt-8">
                <p className="text-muted-foreground">Don't see a role that fits? <a href="#" className="text-primary font-semibold hover:underline">Get in touch</a>.</p>
            </div>
        </div>
      </motion.section>
    </div>
  );
}
