import type { Metadata } from "next";
import "./globals.css";
import Chatbot from "./components/Chatbot";

export const metadata: Metadata = {
  title: "সূচনা ছাত্র সংগঠন | ভালো কিছু শুরু হোক",
  description: "সূচনা ছাত্র সংগঠনের অফিসিয়াল ওয়েবসাইট",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}