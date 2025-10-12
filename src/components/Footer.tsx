import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Circle. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          <Link href="/support" className="hover:text-primary transition-colors">Support</Link>
        </div>
      </div>
    </footer>
  );
}
