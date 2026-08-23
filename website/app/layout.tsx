import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nicely-neon-theme.netlify.app'),
  title: 'Nicely Neon — A VS Code theme in full color',
  description: 'A vivid, carefully balanced dark theme for Visual Studio Code. Bright syntax, complete workbench coverage, and neon color without the eye strain.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    title: 'Nicely Neon — Code in full color',
    description: 'A vivid, carefully balanced dark theme for Visual Studio Code.',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Nicely Neon — Code in full color' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicely Neon — Code in full color',
    description: 'A vivid, carefully balanced dark theme for Visual Studio Code.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
