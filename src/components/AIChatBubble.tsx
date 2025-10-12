"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send, Loader, ImagePlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { chat, type ChatInput } from "@/ai/flows/chat";
import Image from "next/image";

type Message = {
  role: "bot" | "user";
  text: string;
  imageUrl?: string;
};

export default function AIChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi 👋 I'm Circle AI. How can I help you?" },
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
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

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
        history: [...messages, userMessage],
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
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="w-80"
          >
            <Card className="flex flex-col h-[32rem] bg-secondary/50 border-border/50 backdrop-blur-lg">
              <CardHeader className="flex flex-row items-center justify-between p-3 border-b border-border/50">
                <CardTitle className="text-base font-semibold">Circle AI</CardTitle>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="flex-1 p-3 overflow-y-auto space-y-3">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-lg text-sm max-w-[85%] flex-shrink-0 flex flex-col ${
                      m.role === "bot"
                        ? "bg-background/70 text-foreground self-start"
                        : "bg-primary text-primary-foreground self-end ml-auto"
                    }`}
                  >
                    {m.imageUrl && (
                      <Image src={m.imageUrl} alt="User upload" width={150} height={150} className="rounded-md mb-2" />
                    )}
                    {m.text && <span>{m.text}</span>}
                  </div>
                ))}
                {isLoading && (
                  <div className="p-2.5 rounded-lg text-sm max-w-[85%] bg-background/70 text-foreground self-start">
                    <Loader className="h-5 w-5 animate-spin"/>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>
              <CardFooter className="p-2 border-t border-border/50 flex flex-col items-start gap-2">
                {imageUrl && (
                  <div className="relative">
                    <Image src={imageUrl} alt="Preview" width={60} height={60} className="rounded-md"/>
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute -top-2 -right-2 h-5 w-5"
                      onClick={() => setImageUrl(null)}
                    >
                      <X className="h-3 w-3" />
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
                    placeholder="Ask me anything..."
                    disabled={isLoading}
                  />
                  <Button size="icon" onClick={handleSend} disabled={(!input.trim() && !imageUrl) || isLoading}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            onClick={() => setIsOpen(true)}
            size="icon"
            className="h-14 w-14 rounded-full shadow-lg"
          >
            <MessageSquare className="h-7 w-7" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
