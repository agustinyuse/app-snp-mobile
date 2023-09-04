// app/layout.tsx
"use client";
import { Providers } from "./providers";
import styles from "./page.module.css";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className={styles.main}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
