import Link from 'next/link';
import { CircleIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
             <Link href="/" className="flex items-center gap-2">
                <CircleIcon className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Circle</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Connecting people with shared passions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary">Download</Link>
              <Link href="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link>
              <Link href="/ai-support" className="text-muted-foreground hover:text-primary">AI Support</Link>
              <Link href="/human-support" className="text-muted-foreground hover:text-primary">Human Support</Link>
            </div>
          </div>
           <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">Careers</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link>
            </div>
          </div>
           <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 flex justify-between items-center text-sm text-muted-foreground">
             <p>&copy; {new Date().getFullYear()} Circle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
