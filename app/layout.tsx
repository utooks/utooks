import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UTOOKs | 우뚝이들 프로젝트",
  description:
    "우뚝이들(UTOOKs)은 다양한 개발 직군이 함께 아이디어를 실제 서비스로 완성하는 실무형 협업 커뮤니티입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
