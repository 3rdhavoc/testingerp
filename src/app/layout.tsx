// app/layout.tsx
import * as React from 'react';

export const metadata = {
  title: 'Your App Title',
  description: 'Description of your app',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {/* Any global elements like header or footer can go here */}
        {children}
      </body>
    </html>
  );
}
