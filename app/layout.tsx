import "./globals.css";

export const metadata = {
  title: "JaxMckobe Consulting | Enterprise Data, Architecture & Transformation",
  description: "Enterprise data architecture, MDM, governance, integration, modernization, data engineering and analytics consulting.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}