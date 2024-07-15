import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/NavBar";
import { Provider } from "./components/Provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Melbourne Art Gallery Hang Gao",
  description: "Hang Gao artist, sell art gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hang Gao artist, sell art gallery" />
        <meta property="og:title" content="Melbourne Art Gallery Hang Gao" />
        <meta property="og:description" content="Hang Gao artist, sell art gallery" />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Melbourne Art Gallery Hang Gao" />
        <meta name="twitter:description" content="Hang Gao artist, sell art gallery" />
        <meta name="twitter:image" content="/path/to/image.jpg" />
        <link rel="canonical" href="https://yourwebsite.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-blue-50 text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-500 dark:selection:bg-gray-800`}
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
