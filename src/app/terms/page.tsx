
export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-4xl mx-auto prose prose-invert prose-lg prose-headings:text-primary prose-headings:font-headline prose-a:text-primary hover:prose-a:text-primary/80">
      <h1 className="animate-glow">Terms of Service</h1>
      <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
      
      <p>
        Welcome to Circle. By using our platform, you agree to comply with and be bound by the following terms.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using Circle, you agree to these Terms. If you do not agree, please discontinue use immediately.
      </p>

      <h2>2. Use of Platform</h2>
      <p>
        Circle is designed to connect people with shared interests. You agree to use the platform respectfully and legally.
      </p>

      <h2>3. Content & Conduct</h2>
      <p>
        You are responsible for the content you post. Harmful, illegal, or abusive content is strictly prohibited.
      </p>

      <h2>4. Termination</h2>
      <p>
        We reserve the right to suspend or terminate accounts that violate these Terms.
      </p>

      <h2>5. Updates</h2>
      <p>
        Circle may update these Terms at any time. Continued use means you accept any changes.
      </p>
    </div>
  );
}
