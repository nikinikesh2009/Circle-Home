"use client";

import { useState } from 'react';
import AiSupportChat from "@/components/AiSupportChat";
import HumanSupportForm from "@/components/HumanSupportForm";
import { Button } from '@/components/ui/button';
import { Bot, User } from 'lucide-react';

export default function SupportPage() {
  const [activeSupport, setActiveSupport] = useState<'ai' | 'human'>('ai');

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline text-primary animate-glow">Support</h1>
        <p className="text-lg text-muted-foreground mt-2">How can we help you today?</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button 
            variant={activeSupport === 'ai' ? 'default' : 'outline'}
            onClick={() => setActiveSupport('ai')}
            className="rounded-full"
          >
            <Bot className="mr-2 h-4 w-4" />
            AI Assistant
          </Button>
          <Button 
            variant={activeSupport === 'human' ? 'default' : 'outline'}
            onClick={() => setActiveSupport('human')}
            className="rounded-full"
          >
            <User className="mr-2 h-4 w-4" />
            Contact Human Support
          </Button>
        </div>
      </header>
      
      <div className="flex-1">
        <div style={{ display: activeSupport === 'ai' ? 'block' : 'none' }}>
          <AiSupportChat />
        </div>
        <div style={{ display: activeSupport === 'human' ? 'block' : 'none' }}>
          <HumanSupportForm />
        </div>
      </div>
    </div>
  );
}
