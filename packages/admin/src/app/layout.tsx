/**
 * このファイルは管理者パネルのルートレイアウトファイルです。
 * すべての管理者ページに適用される共通のレイアウトを定義しています。
 */

import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TONゲーム - 管理者パネル',
  description: 'TONゲーム管理者パネル',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/akn4ocf.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="min-h-screen bg-admin-background">
        {children}
      </body>
    </html>
  );
}
