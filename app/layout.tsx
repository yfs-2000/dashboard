import '@/app/globals.css';
import React from "react";
import { inter,lusitana } from '@/app/ui/fonts';
function get() {
  return new Promise((resolve)=>setTimeout(resolve,3000))
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await get();
  return (
    <html lang="en">
      <body className={`${inter.className} ${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
