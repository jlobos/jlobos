import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>lobito</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
