import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Hang Gao&s Blog",
  description: "Personal blog",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-500 dark:selection:bg-gray-800`}
      >
        <Provider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
