import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Script from "next/script";
import { getURL, isProd } from "@/lib/env";

const defaultUrl = getURL();
const CLARITY_KEY = "l7bra27awx";

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
        {isProd() && (
          <>
            <Script
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-N7WRVC5T');`,
              }}
            />

            <Script
              id="ms_clarity"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_KEY}");`,
              }}
            />
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
          </>
        )}
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N7WRVC5T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
