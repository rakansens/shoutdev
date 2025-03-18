/**
 * このファイルはNext.jsのルートレイアウトファイルです。
 * すべてのページに適用される共通のレイアウトを定義しています。
 * Telegram Mini App SDKの初期化も行います。
 * Good Timesフォントを追加しました。
 */

import '../styles/globals.css';
import '../styles/telegram-mini-app.css';
import type { Metadata } from 'next';
import TelegramInitializer from '../components/TelegramInitializer';
import MobileNavigation from '../components/MobileNavigation';

export const metadata: Metadata = {
  title: 'TONゲーム - スマホファーストのWeb3ゲームプラットフォーム',
  description: 'TON SDKを活用したスマホネイティブなWeb3ゲームプラットフォーム',
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
      <body className="min-h-screen bg-deep-purple font-good-times">
        <div className="max-w-md mx-auto min-h-screen flex flex-col pb-16 md:pb-0">
          <TelegramInitializer />
          {children}
          <MobileNavigation />
        </div>
      </body>
    </html>
  );
}
