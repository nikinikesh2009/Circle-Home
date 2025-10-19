import { Inter, Space_Grotesk, Playfair_Display } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import ScrollToTop from '@/components/ScrollToTop'
import Header from '@/components/Header'
import Footer from '@/components/FooterNew'
import { ThemeProvider } from '@/components/ThemeProvider'
import { TranslationProvider } from '@/context/TranslationContext'
import { Toaster } from '@/components/ui/toaster'
import AnimatedWrapper from '@/components/AnimatedWrapper'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(inter.variable, spaceGrotesk.variable, playfairDisplay.variable, "font-body antialiased")}>
        <TranslationProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="aurora-background"></div>
            <div className="flex flex-col min-h-screen relative z-10">
              <Header />
              <main className="flex-1 pt-20">
                <AnimatedWrapper>{children}</AnimatedWrapper>
              </main>
              <Footer />
            </div>
            <ScrollToTop />
            <Toaster />
          </ThemeProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
