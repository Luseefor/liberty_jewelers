import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liberty Gold & Diamonds | Exquisite Fine Jewelry & Custom Designs",
  description: "Discover luxury jewelry at Liberty Gold & Diamonds. From engagement rings to custom pieces, we offer the finest diamonds, gold, and precious gemstones. Quality craftsmanship since 1985.",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("❌ NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is missing. Add it in Vercel → Project Settings → Environment Variables.");
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
