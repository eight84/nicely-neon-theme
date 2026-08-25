import type { Metadata } from 'next';
import { Google_Sans, Google_Sans_Code } from 'next/font/google';
import './globals.css';

const googleSans = Google_Sans({ variable: '--font-geist-sans', subsets: ['latin'] });
const googleSansCode = Google_Sans_Code({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nicely-neon-theme.netlify.app'),
  title: 'Nicely Neon | Dark Theme for VS Code, Cursor & PyCharm',
  description: 'Nicely Neon is a free colorful dark theme for VS Code, Cursor, and PyCharm with vivid syntax highlighting and balanced contrast.',
  applicationName: 'Nicely Neon',
  category: 'Developer tools',
  keywords: [
    'VS Code theme',
    'Visual Studio Code theme',
    'cool VS Code themes',
    'colorful VS Code theme',
    'dark VS Code theme',
    'neon VS Code theme',
    'TypeScript VS Code theme',
    'Python VS Code theme',
    'Cursor theme',
    'dark Cursor theme',
    'PyCharm color scheme',
    'JetBrains theme',
  ],
  authors: [{ name: 'eight84', url: 'https://eight84.com' }],
  creator: 'eight84',
  publisher: 'eight84',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    title: 'Nicely Neon | Dark Theme for VS Code, Cursor & PyCharm',
    description: 'A free colorful dark theme for Visual Studio Code, Cursor, and PyCharm with vivid syntax highlighting and balanced contrast.',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Nicely Neon — Code in full color' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicely Neon | Dark Theme for VS Code, Cursor & PyCharm',
    description: 'A free colorful dark theme for Visual Studio Code, Cursor, and PyCharm with vivid syntax highlighting and balanced contrast.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${googleSans.variable} ${googleSansCode.variable}`}>{children}</body>
    </html>
  );
}
