"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "bot" | "user";
  text: string;
};

export default function AIChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi 👋 I'm Circle AI. How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages: Message[] = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Dummy AI response
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { role: "bot", text: "I'm here to help! (Real AI coming soon 🤖)" },
      ]);
    }, 600);
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
            <Card className="flex flex-col h-[28rem] bg-secondary/50 border-border/50 backdrop-blur-lg">
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
                    className={`p-2.5 rounded-lg text-sm max-w-[85%] ${
                      m.role === "bot"
                        ? "bg-background/70 text-foreground self-start"
                        : "bg-primary text-primary-foreground self-end ml-auto"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="p-2 border-t border-border/50">
                <div className="flex w-full items-center gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1"
                    placeholder="Ask me anything..."
                  />
                  <Button size="icon" onClick={handleSend} disabled={!input.trim()}>
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
