const milestones = [
  {
    year: "2024",
    text: "The idea of Circle was born — a new way to connect people with shared interests.",
  },
  {
    year: "2025",
    text: "MVP released for early testers. First Circles created.",
  },
  {
    year: "Future",
    text: "Global launch with millions of meaningful communities.",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-headline mb-12 text-primary animate-glow">
          Our Journey
        </h2>
        <div className="relative">
          {/* The vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-0.5 bg-border/40 -z-10"></div>
          
          <div className="space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full mb-3 ring-8 ring-background"></div>
                <h3 className="text-2xl font-semibold font-headline">{m.year}</h3>
                <p className="text-muted-foreground max-w-md text-lg mt-1">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
