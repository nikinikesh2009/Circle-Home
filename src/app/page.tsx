import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 text-primary">
        Welcome to Circle
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        A new kind of platform to meet people who share your passion.
      </p>
      <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent-foreground">
        <Link href="/about">Learn More</Link>
      </Button>
    </div>
  );
}
