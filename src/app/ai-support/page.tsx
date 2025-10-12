
import AiSupportChat from "@/components/AiSupportChat";
import { Bot } from 'lucide-react';

export default function AiSupportPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline text-primary animate-glow inline-flex items-center">
          <Bot className="mr-3 h-10 w-10" />
          AI Assistant
        </h1>
        <p className="text-lg text-muted-foreground mt-2">Get instant help from our AI-powered assistant.</p>
      </header>
      
      <div className="flex-1 min-h-0">
        <AiSupportChat />
      </div>
    </div>
  );
}
