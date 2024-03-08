/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2024-03-06 15:12
 * @LastAuthor : wangchao
 * @LastTime   : 2024-03-06 17:02
 * @desc       : 
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "目录树生成器",
  description: "生成目录树结构",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <h1>Test 布局！！！</h1>
        </body>
    </html>
  );
}
