import AiSupportChat from "@/components/AiSupportChat";

export default function SupportPage() {
  return (
    <div className="h-[calc(100vh-10rem)]">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline text-primary animate-glow">24/7 AI Support</h1>
        <p className="text-lg text-muted-foreground mt-2">Get instant help from Circle AI. How can I assist you today?</p>
      </header>
      
      <AiSupportChat />
    </div>
  );
}
