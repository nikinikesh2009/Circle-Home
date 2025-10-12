
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, Circle as CircleIcon, Sun, Moon, Bot, User, Download, HelpCircle, BadgeCheck, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const useActivePath = () => {
  const pathname = usePathname();
  return (path: string, partial?: boolean) => {
    if (partial) return pathname.startsWith(path);
    return pathname === path;
  }
};

function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function LanguageSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="font-bold">Translate Page</DropdownMenuLabel>
        <DropdownMenuSeparator />
         <div className="p-2 text-sm text-muted-foreground max-w-xs">
          <p className="font-semibold text-foreground mb-2">This site can be translated into many languages using your browser:</p>
          <ul className="list-disc list-inside text-xs">
            <li>Sinhala (සිංහල)</li>
            <li>Tamil (தமிழ்)</li>
            <li>Chinese (中文)</li>
            <li>Japanese (日本語)</li>
            <li>Tagalog</li>
            <li>Spanish (Español)</li>
            <li>And many more...</li>
          </ul>
          <br />
          <p>
            To translate, <strong className="text-foreground">right-click</strong> anywhere on the page and select your browser's <strong className="text-foreground">"Translate"</strong> option.
          </p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isActive = useActivePath();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/why-circle', label: 'Why Circle?' },
    { href: '/careers', label: 'Careers' },
    { href: '/certificate', label: 'Certificate' },
  ];

  const supportLinks = [
    { href: '/ai-support', label: 'AI Support', icon: <Bot className="mr-2" /> },
    { href: '/human-support', label: 'Human Support', icon: <User className="mr-2" /> },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center gap-2">
            <CircleIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Circle - ACO Network</span>
            <BadgeCheck className="h-5 w-5 text-blue-500" />
          </Link>
        </div>
        <div className="flex items-center md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
                 <Link href="/" className="flex items-center gap-2 mb-6" onClick={() => setIsMobileMenuOpen(false)}>
                    <CircleIcon className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold">Circle - ACO Network</span>
                    <BadgeCheck className="h-5 w-5 text-blue-500" />
                </Link>
              <div className="flex flex-col gap-2">
                {navLinks.map(link => (
                  <SheetClose asChild key={link.href}>
                    <Button variant={isActive(link.href) ? "secondary" : "ghost"} asChild className="justify-start">
                        <Link href={link.href}>
                        {link.label}
                        </Link>
                    </Button>
                  </SheetClose>
                ))}
                 <SheetClose asChild>
                    <Button variant={isActive("/faq") ? "secondary" : "ghost"} asChild className="justify-start">
                        <Link href="/faq">
                          FAQ
                        </Link>
                    </Button>
                  </SheetClose>
                 <div className="my-2 border-t border-border/40"></div>
                  {supportLinks.map(link => (
                      <SheetClose asChild key={link.href}>
                        <Button variant={isActive(link.href) ? "secondary" : "ghost"} asChild className="justify-start w-full">
                            <Link href={link.href}>
                            {link.icon}
                            {link.label}
                            </Link>
                        </Button>
                      </SheetClose>
                  ))}
                   <div className="my-2 border-t border-border/40"></div>
                   <SheetClose asChild>
                      <Button asChild className="justify-center w-full">
                          <Link href="/download">
                          <Download className="mr-2" />
                          Download App
                          </Link>
                      </Button>
                    </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex flex-1 items-center justify-between md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
                <Link href="/" className="flex items-center gap-2 md:hidden">
                    <CircleIcon className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold">Circle - ACO Network</span>
                    <BadgeCheck className="h-5 w-5 text-blue-500" />
                </Link>
            </div>

            <nav className="hidden md:flex gap-2 items-center">
            {navLinks.map(link => (
                <Button variant={isActive(link.href) ? "secondary" : "ghost"} asChild key={link.href}>
                <Link href={link.href}>{link.label}</Link>
                </Button>
            ))}
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={isActive("/ai-support") || isActive("/human-support") || isActive("/faq") ? "secondary" : "ghost"}>Support</Button>
                </DropdownMenuTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuContent align="end">
                    {supportLinks.map(link => (
                      <DropdownMenuItem asChild key={link.href}>
                        <Link href={link.href}>{link.icon} {link.label}</Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem asChild>
                      <Link href="/faq"><HelpCircle className="mr-2"/>FAQ</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenuPortal>
              </DropdownMenu>

            <Button asChild size="sm" className="ml-4">
                <Link href="/download">
                    <Download className="mr-2"/>
                    Download
                </Link>
            </Button>
            <LanguageSwitcher />
            <ThemeToggle />
            </nav>
            <div className="md:hidden flex items-center">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
        </div>
      </div>
    </header>
  );
}
