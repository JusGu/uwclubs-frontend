import { GeistSans } from "geist/font/sans";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "UWClubs",
  description: "A calendar for club events",
  openGraph: {
    title: "UWClubs",
    description: "A calendar for club events",
    url: defaultUrl,
    siteName: "UWClubs",
    images: [
      {
        url: `${defaultUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "UWClubs",
      },
      {
        url: `${defaultUrl}/twitter-image.png`,
        width: 1200,
        height: 630,
        alt: "UWClubs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>

      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
