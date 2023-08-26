import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord beluga',
  description: 'Discord clone created using nextjs 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning >
        <body className={font.className}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false} storageKey='discord-theme' >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
