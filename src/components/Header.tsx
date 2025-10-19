"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CircleIcon, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Why Circle", href: "/why-circle" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Support", href: "/human-support" },
];

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 10);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        sticky
          ? "shadow-lg bg-background/95 backdrop-blur-md py-3"
          : "shadow-none py-5 bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <CircleIcon className="h-8 w-8 text-primary" />
          <span className="text-2xl font-headline font-bold gradient-text">Circle</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/download" className="hidden lg:block">
            <Button
              className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white transition-all duration-300"
            >
              Download App
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle mobile menu"
          >
            {navbarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 lg:hidden" />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={cn(
          "lg:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-card shadow-lg transform transition-transform duration-300 z-50",
          navbarOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            <CircleIcon className="h-7 w-7 text-primary" />
            <span className="text-xl font-headline font-bold gradient-text">Circle</span>
          </Link>
          <button
            onClick={() => setNavbarOpen(false)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setNavbarOpen(false)}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2"
            >
              {item.label}
            </Link>
          ))}
          
          <div className="pt-4 border-t border-border">
            <Link href="/download" onClick={() => setNavbarOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white">
                Download App
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
