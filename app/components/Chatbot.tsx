"use client";

import Script from "next/script";

export default function Chatbot() {
  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
        strategy="afterInteractive"
      />

      <Script
        src="https://files.bpcontent.cloud/2026/05/17/07/20260517075511-93G2YO91.js"
        strategy="afterInteractive"
      />
    </>
  );
}