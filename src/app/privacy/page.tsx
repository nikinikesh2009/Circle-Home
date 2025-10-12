
export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-4xl mx-auto prose prose-invert prose-lg prose-headings:text-primary prose-headings:font-headline prose-a:text-primary hover:prose-a:text-primary/80">
      <h1 className="animate-glow">Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
      
      <p>
        Your privacy is important to us. This Privacy Policy explains how Circle collects, uses, and protects your information.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect your email, profile information, device data, and usage activity to improve our services.
      </p>

      <h2>2. How We Use Information</h2>
      <p>
        We use your data to provide and enhance the Circle experience — connecting you to relevant communities and features.
      </p>

      <h2>3. Sharing & Security</h2>
      <p>
        We do not sell your data. Circle uses security best practices to protect user information.
      </p>

      <h2>4. Your Rights</h2>
      <p>
        You may request to delete or modify your data at any time through account settings or support.
      </p>

      <h2>5. Policy Updates</h2>
      <p>
        We may update this policy. We will notify users of any significant changes.
      </p>
    </div>
  );
}
