import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import HeaderNavigation from "~/components/navigation/navigation";
import { Arcades } from "~/components/arcades";

import { VT323 } from "next/font/google";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Game Storm - Your Ultimate Gaming Destination",
  description:
    "Discover and play the latest games in our electric gaming universe",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <TRPCReactProvider>
      <ClerkProvider>
        <html
          lang="en"
          className={`${GeistSans.className}, ${vt323.className}`}
          suppressHydrationWarning
        >
          <body className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
            <div className="retro-grid" />
            <div className="retro-glow" />
            <Arcades />
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
            >
              <HeaderNavigation />
              <main className="relative z-10">{children}</main>
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </TRPCReactProvider>
  );
}
