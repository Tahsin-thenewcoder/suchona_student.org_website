import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "বাংলা উৎসব | সূচনা ছাত্র সংগঠন",
  description:
    "সূচনা ছাত্র সংগঠন আয়োজিত বাংলা উৎসবের আয়োজন, ফলাফল, সিলেবাস, প্রশ্ন ও স্মৃতির সংগ্রহশালা।",
};

export default function BanglaUtsobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}