import { Heart, BrainCircuit, Zap, Globe } from "lucide-react";

const differentiators = [
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    text: "Connects people based on passion, not popularity."
  },
  {
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    text: "Uses AI to personalize and moderate the experience."
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    text: "No chaos. No infinite scrolling. Just focused spaces."
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    text: "Built to grow with people — from ideas to real bonds."
  }
];

export default function WhyCircleIsDifferent() {
  return (
    <section className="py-12 max-w-4xl mx-auto px-4">
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold font-headline text-primary animate-glow">Why We're Different</h2>
      </header>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {differentiators.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex-shrink-0 bg-secondary p-3 rounded-full border border-border/50">
              {item.icon}
            </div>
            <p className="text-lg text-foreground">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-xl text-muted-foreground mt-12">
        Circle isn’t trying to replace social media. It’s building something <strong className="text-foreground">better</strong> — a place where people can <strong className="text-foreground">belong</strong>.
      </p>
    </section>
  );
}
