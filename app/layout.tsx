import type { Metadata } from "next";
import React from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Generación Ads | Marketing B2B y Captación de Leads",
  description: "Agencia especializada en estrategias de generación de demanda y captación de clientes B2B. Llenamos tu pipeline de ventas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=chillax@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '110432718661366');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=110432718661366&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
      </body>
    </html>
  );
}