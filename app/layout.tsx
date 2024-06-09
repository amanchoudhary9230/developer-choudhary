import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../context/theme-provider";

export const metadata: Metadata = {
  title: "Developer Choudhary",
  description: "A full stack website developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
