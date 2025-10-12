import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SupportForm() {
  return (
    <form className="space-y-4 max-w-lg mx-auto">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Your Email</Label>
        <Input type="email" id="email" placeholder="you@example.com" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="subject">Subject</Label>
        <Input type="text" id="subject" placeholder="How can we help?" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Please describe your issue in detail." id="message" rows={6} />
      </div>
      <Button type="submit" className="w-full">Submit Request</Button>
    </form>
  );
}
