import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Script from "next/script";
import { getURL, isProd } from "@/lib/env";

const defaultUrl = getURL();

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
      {isProd() && (
        <>
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-02CVJFYJG2"
          />
          <Script strategy="afterInteractive" id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-02CVJFYJG2');
            `}
          </Script>
          <Script type="text/javascript">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "l7bra27awx");
              `}
          </Script>
        </>
      )}

      <body>
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
