"use client";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImagePlus, Loader, Send, X } from "lucide-react";
import Image from "next/image";
import { chat, type ChatInput } from "@/ai/flows/chat";
import ReactMarkdown from "react-markdown";

type Message = {
  role: "bot" | "user";
  text: string;
  imageUrl?: string;
};

export default function AiSupportChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Welcome to Circle AI support. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async () => {
    if (!input.trim() && !imageUrl) return;

    const userMessage: Message = { role: "user", text: input, imageUrl: imageUrl ?? undefined };
    setMessages((prev) => [...prev, userMessage]);
    
    setInput("");
    setImageUrl(null);
    setIsLoading(true);

    try {
      const chatInput: ChatInput = {
        history: [...messages, userMessage].map(m => ({
          role: m.role,
          text: m.text,
          imageUrl: m.imageUrl,
        })),
      };
      const result = await chat(chatInput);
      setMessages((prev) => [...prev, { role: "bot", text: result.response }]);
    } catch (error) {
      console.error("Error calling AI:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, I'm having trouble connecting. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <Card className="flex flex-col h-full bg-secondary/30 border-border/50 backdrop-blur-lg">
      <CardContent className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg text-sm max-w-[85%] flex-shrink-0 flex flex-col ${
              m.role === "bot"
                ? "bg-background/70 text-foreground self-start"
                : "bg-primary text-primary-foreground self-end ml-auto"
            }`}
          >
            {m.imageUrl && (
              <Image src={m.imageUrl} alt="User upload" width={200} height={200} className="rounded-md mb-2" />
            )}
            {m.text && (
               <div className="prose prose-sm prose-invert max-w-none">
                <ReactMarkdown>{m.text}</ReactMarkdown>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="p-3 rounded-lg text-sm max-w-[85%] bg-background/70 text-foreground self-start">
            <Loader className="h-5 w-5 animate-spin" />
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardFooter className="p-3 border-t border-border/50 flex flex-col items-start gap-2">
        {imageUrl && (
          <div className="relative">
            <Image src={imageUrl} alt="Preview" width={80} height={80} className="rounded-md" />
            <Button
              variant="destructive"
              size="icon"
              className="absolute -top-2 -right-2 h-6 w-6"
              onClick={() => setImageUrl(null)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
        <div className="flex w-full items-center gap-2">
          <Input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
          <Button variant="ghost" size="icon" onClick={() => fileInputRef.current?.click()} disabled={isLoading}>
            <ImagePlus className="h-5 w-5" />
          </Button>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
            placeholder="Describe your issue or ask a question..."
            disabled={isLoading}
          />
          <Button size="icon" onClick={handleSend} disabled={(!input.trim() && !imageUrl) || isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
