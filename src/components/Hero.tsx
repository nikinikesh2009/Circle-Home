import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="text-center py-12 md:py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6 text-primary">
          Meet People Who Share Your Passion
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Circle is a next-generation platform to connect, chat, and grow together — powered by smart AI and vibrant communities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent-foreground">
            <Link href="/about">Learn More</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#">Download App</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
