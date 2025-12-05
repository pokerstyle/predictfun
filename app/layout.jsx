import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "PredictFun.com",
  description:
    "PredictFun",
};

export default function RootLayout({ children }) {
  const title = "PredictFun.com";
  const description =
    "PredictFun";
  const url = "https://predictfun.com/";

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </head>
      <body>
        {/* GA4 tracking: твой ID G-733WQVSNV5 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-733WQVSNV5"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-733WQVSNV5');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
