import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "미술마을 미술학원 | 아이들의 창의력이 자라는 곳",
  description:
    "미술마을 미술학원은 5세부터 중등까지, 아이들의 창의적 사고와 예술적 감성을 키워주는 전문 미술 교육기관입니다.",
  keywords: "미술학원, 미술마을, 아동미술, 창의미술, 미술교육, 유아미술, 초등미술",
  icons: {
    icon: "/favicon.svg",
  },
  formatDetection: {
    telephone: false,
    address: false,
  },
  openGraph: {
    title: "미술마을 미술학원 | 아이들의 창의력이 자라는 곳",
    description:
      "미술마을 미술학원은 5세부터 중등까지, 아이들의 창의적 사고와 예술적 감성을 키워주는 전문 미술 교육기관입니다.",
    type: "website",
    locale: "ko_KR",
  },
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
