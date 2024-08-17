// src/app/layout.js
import { SessionProvider } from 'next-auth/react';
import './globals.css'; // Your global CSS file

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}