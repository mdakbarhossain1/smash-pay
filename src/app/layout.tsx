import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import Provider from '@/client-provider/provider';

import '../style/globals.css';

const manropeSans = Manrope({
  variable: '--font-manrope-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Payment: Cross-border payment made easy.',
  description:
    'We help individuals and businesses to securely send and receive money globally, without the bank fees.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body
        className={`${manropeSans.className} bg-bg relative flex flex-col items-center justify-start gap-0 antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
