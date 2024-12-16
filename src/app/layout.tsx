import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import { Tally } from '@/components/tally';

const montserratHeading = Montserrat({
  variable: '--font-heading',
  weight: ['600', '700'],
  display: 'swap',
  subsets: ['latin'],
});

const openSansBody = Open_Sans({
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Scalable Personalized Outreach | Entropi',
  description:
    'The platform that transforms outreach with personalized messaging. Build meaningful connections and scale your efforts with data-driven insights.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserratHeading.variable} ${openSansBody.variable} antialiased`}
    >
      <body>{children}</body>
      <Tally />
    </html>
  );
}
