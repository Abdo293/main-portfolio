// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { ModeToggle } from "@/components/themes/darkModeIcons";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelrhman Elsayed",
  description: "Web Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed right-[31px] top-[20px] z-50">
            <ModeToggle />
          </div>
          {children}
          <Toaster position="top-center" richColors />
          <Navigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
