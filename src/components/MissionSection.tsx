export default function MissionSection() {
  return (
    <section className="bg-secondary/50 border border-border/50 rounded-lg py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 font-headline text-foreground">
            Our Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            To connect people around the world with shared passions and ideas. We
            make it easy to find like-minded communities, build friendships, and
            grow together.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 font-headline text-foreground">
            Our Vision
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            We see a future where technology amplifies human connection — where AI
            acts as a bridge, not a wall, between real communities.
          </p>
        </div>
      </div>
    </section>
  );
}
