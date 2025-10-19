import { Inter } from 'next/font/google'
import './globals.css'
import Aoscompo from '@/lib/utils/aos'
import ScrollToTop from './components/scroll-to-top'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
const font = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <Aoscompo>
          <Header />
          {children}
          <Footer />
        </Aoscompo>
        <ScrollToTop />
      </body>
    </html>
  )
}
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
