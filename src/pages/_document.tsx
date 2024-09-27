import { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="cs">
      <Head />
      <body
        style={{
          backgroundImage: `url('/llline.svg')`,
          backgroundSize: 'cover', // nebo 'contain', pokud chcete zachovat poměr stran
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Main />
        <Analytics />
        <NextScript />
      </body>
    </Html>
  );
}
