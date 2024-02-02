import { GeistSans } from "geist/font/sans";
import "./globals.css";

function getDefaultUrl() {
  if (process.env.VERCEL_URL) {
    if (process.env.PUBLIC_ENV === "staging") {
      return "https://staging.uwclubs.com/";
    } else if (process.env.PUBLIC_ENV === "prod") {
      return `https://uwclubs.com`;
    }
  }
  return "http://localhost:3000";
}

const defaultUrl = getDefaultUrl();

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

      <body>
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
