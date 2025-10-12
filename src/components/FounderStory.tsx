import { CircleIcon } from "lucide-react";

export default function FounderStory() {
  return (
    <section className="py-12 text-center max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6 text-primary animate-glow">
        This Is Our Story
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Circle was created by <strong className="text-foreground">Nikil Nikesh</strong> — also known as <strong className="text-foreground">SplashPro</strong> — and built with the support of the <strong className="text-foreground">ACO Team.</strong>
      </p>
      <div className="bg-secondary p-6 rounded-lg border border-border/50 max-w-3xl mx-auto">
        <p className="text-xl italic text-foreground leading-relaxed">
          “It was hard to find people who shared the same passions, dreams, or goals. So instead of waiting for a platform that solved this, we decided to build it.”
        </p>
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed mt-8">
        What started as a simple AI-powered to-do list app evolved into something much bigger — a universal platform designed to connect like-minded people across the world.
      </p>
    </section>
  );
}
