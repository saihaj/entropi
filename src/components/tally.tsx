'use client';

import Script from 'next/script';

const FORM_ID = '3E86dL';

export function Tally() {
  return (
    <Script
      id="tally-js"
      strategy="afterInteractive"
      src="https://tally.so/widgets/embed.js"
    />
  );
}
