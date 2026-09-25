import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vòng quay may mắn",
  description: "Vòng quay may mắn và gói câu hỏi Nguyễn Đình Chiểu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
