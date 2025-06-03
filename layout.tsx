import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPAN144 Assignment',
  description: 'Advanced Front-End Development Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}