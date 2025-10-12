import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Circle?",
      answer: "Circle is a platform designed to help people with shared interests and passions connect with each other, form communities, and build meaningful relationships."
    },
    {
      question: "How do I join a circle?",
      answer: "You can browse existing circles by category or interest on our 'Explore' page. Once you find one you like, simply click the 'Join' button. Some circles may be private and require approval from an administrator."
    },
    {
      question: "Is Circle free to use?",
      answer: "Yes, the basic features of Circle, including joining and participating in circles, are completely free. We may introduce premium features in the future."
    },
    {
      question: "Can I create my own circle?",
      answer: "Absolutely! Any user can create a new circle. You'll become the administrator, allowing you to set rules, manage members, and customize your community's space."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline text-primary animate-glow">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground mt-2">Find answers to common questions about Circle.</p>
      </header>
      
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="border-b-0 rounded-lg shadow-sm bg-secondary/50 border border-border/50">
            <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0 text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
