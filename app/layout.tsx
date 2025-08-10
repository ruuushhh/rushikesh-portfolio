import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rushikesh Tayade - Senior Backend & Integrations Engineer',
  description: 'I build reliable financial integrations and backend systems that scale — from Sage Intacct to QBO — with clean APIs, resilient data pipelines, and observability-first engineering.',
  keywords: ['backend engineer', 'integrations', 'python', 'django', 'sage intacct', 'qbo'],
  authors: [{ name: 'Rushikesh Tayade' }],
  creator: 'Rushikesh Tayade',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rushikeshtayade.dev',
    title: 'Rushikesh Tayade - Senior Backend & Integrations Engineer',
    description: 'I build reliable financial integrations and backend systems that scale — from Sage Intacct to QBO — with clean APIs, resilient data pipelines, and observability-first engineering.',
    siteName: 'Rushikesh Tayade Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rushikesh Tayade - Senior Backend & Integrations Engineer',
    description: 'I build reliable financial integrations and backend systems that scale — from Sage Intacct to QBO — with clean APIs, resilient data pipelines, and observability-first engineering.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
