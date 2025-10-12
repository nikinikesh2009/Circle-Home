
import HumanSupportForm from "@/components/HumanSupportForm";
import { User } from 'lucide-react';

export default function HumanSupportPage() {
  return (
    <div>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline text-primary animate-glow inline-flex items-center">
           <User className="mr-3 h-9 w-9" />
          Contact Human Support
        </h1>
        <p className="text-lg text-muted-foreground mt-2">A member of our team will get back to you shortly.</p>
      </header>
      <HumanSupportForm />
    </div>
  );
}
