export const metadata = {
  title: "Privacy Policy - Developer Choudhary",
  description: "A full stack website developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>{children}</body>
    </html>
  );
}
