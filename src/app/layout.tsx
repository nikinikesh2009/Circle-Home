import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Inter, Space_Grotesk, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});


export const metadata: Metadata = {
  title: 'Circle Website',
  description: 'A new kind of platform to meet people who share your passion.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, spaceGrotesk.variable, playfairDisplay.variable, "font-body antialiased bg-background")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
           <div className="aurora-background"></div>
          <div className="flex flex-col min-h-screen relative z-10">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8">
              <AnimatedWrapper>{children}</AnimatedWrapper>
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
