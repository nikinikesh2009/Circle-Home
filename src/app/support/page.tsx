import SupportForm from "@/components/SupportForm";

export default function SupportPage() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold font-headline text-primary animate-glow">Support Center</h1>
        <p className="text-lg text-muted-foreground mt-2">We're here to help. Fill out the form below to get in touch with our team.</p>
      </header>
      
      <div className="bg-secondary/30 border border-border/50 p-8 rounded-lg shadow-lg">
        <SupportForm />
      </div>
    </div>
  );
}
