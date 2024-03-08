/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2024-03-06 15:12
 * @LastAuthor : wangchao
 * @LastTime   : 2024-03-08 15:47
 * @desc       : 
 */

import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';



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
      <body >
        {/* {children} */}
        <AntdRegistry>{children}</AntdRegistry>
        </body>
    </html>
  );
}
