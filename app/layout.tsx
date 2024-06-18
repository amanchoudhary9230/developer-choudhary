import "./globals.css";
import { ThemeProvider } from "../context/theme-provider";

export const metadata = {
  title: "Developer Choudhary",
  description: "A full stack website developer",
  meta: [
    { name: "google-adsense-account", content: "ca-pub-3643130730451957" },
  ],
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
