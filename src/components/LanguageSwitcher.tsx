"use client";
import { useState } from "react";
import { Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("en");

  // later: add actual translation support with i18n
  const handleSelect = (langCode: string) => {
    setLang(langCode);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="h-14 w-14 rounded-full shadow-lg bg-background/50 backdrop-blur-lg">
                <Globe className="h-6 w-6" />
                <span className="sr-only">Toggle Language</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" side="top" className="mb-2">
            <DropdownMenuItem onSelect={() => handleSelect("en")}>
                <span className="mr-2">🇺🇸</span> English
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleSelect("es")}>
                <span className="mr-2">🇪🇸</span> Español
            </DropdownMenuItem>
             <DropdownMenuItem onSelect={() => handleSelect("fr")}>
                <span className="mr-2">🇫🇷</span> Français
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleSelect("zh")}>
                <span className="mr-2">🇨🇳</span> 中文
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    </div>
  );
}
