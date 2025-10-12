import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, MessageSquare, ShieldCheck, Lock } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="h-8 w-8 text-primary" />,
    title: "Join Pre-Created Circles",
    description: "Find your community based on interests like fitness, tech, music, or gaming. No need to build from scratch."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Chat & Collaborate",
    description: "Each Circle is a mini-community where you can chat, share ideas, and grow with like-minded people."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Safe & Focused Environment",
    description: "AI moderation keeps conversations on track, ensuring a smart, safe, and productive space for everyone."
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Private & Verified Circles",
    description: "Verified organizations or special users can create private Circles with their own admin tools for exclusive communities."
  }
]

export default function HowCirclesWork() {
  return (
    <section className="py-12 max-w-5xl mx-auto px-4">
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold font-headline text-primary animate-glow">How It Works</h2>
        <p className="text-lg text-muted-foreground mt-2">A simple, powerful way to connect.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <Card key={index} className="bg-secondary border-border/50 flex flex-col items-center text-center p-6">
            <CardHeader className="items-center pb-4">
              {step.icon}
              <CardTitle className="mt-4 text-xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
       <div className="mt-12 text-center text-muted-foreground italic max-w-3xl mx-auto">
          <p>A Python developer joins the “Python Circle” and meets a partner to build a project. A fitness enthusiast finds a workout buddy in their local gym circle. A student finds a group of learners chasing the same dream.</p>
          <p className="font-bold text-foreground mt-2">Real connections, real outcomes.</p>
      </div>
    </section>
  );
}
