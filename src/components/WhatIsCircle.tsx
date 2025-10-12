import { Dumbbell, BrainCircuit, HeartHandshake, Rocket, Users } from "lucide-react";

const interests = [
    { icon: <Dumbbell className="h-8 w-8 text-primary" />, name: "Fitness Lovers" },
    { icon: <BrainCircuit className="h-8 w-8 text-primary" />, name: "Programmers" },
    { icon: <HeartHandshake className="h-8 w-8 text-primary" />, name: "Relationship Support" },
    { icon: <Rocket className="h-8 w-8 text-primary" />, name: "Entrepreneurs" },
    { icon: <Users className="h-8 w-8 text-primary" />, name: "Students" },
]

export default function WhatIsCircle() {
  return (
    <section className="py-12 max-w-4xl mx-auto px-4">
        <header className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline text-primary animate-glow">
                What is Circle?
            </h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                Circle is not just another social media app. It’s a next-generation community platform where users join “Circles” — curated spaces based on shared interests, goals, or passions.
            </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center mb-12">
            {interests.map(item => (
                <div key={item.name} className="flex flex-col items-center gap-3 p-4 rounded-lg bg-secondary border border-transparent hover:border-primary/50 transition-colors">
                    {item.icon}
                    <p className="font-semibold text-sm">{item.name}</p>
                </div>
            ))}
        </div>

         <div className="bg-secondary p-6 rounded-lg border border-border/50 max-w-3xl mx-auto text-center">
            <p className="text-xl italic text-foreground leading-relaxed">
             “Bring the right people together — and let real connections build everything else.”
            </p>
        </div>
    </section>
  );
}
