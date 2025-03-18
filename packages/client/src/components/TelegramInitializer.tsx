/**
 * このファイルはTelegram Mini App SDKの初期化を行うコンポーネントです。
 * クライアントサイドでのみ実行されるため、'use client'ディレクティブを使用しています。
 */

'use client';

import { useEffect } from 'react';
import { initTelegramMiniApp } from '../services/telegram';

export default function TelegramInitializer() {
  useEffect(() => {
    // Telegram Mini Appの初期化
    const initialized = initTelegramMiniApp();
    
    if (initialized) {
      console.log('Telegram Mini App initialized successfully');
    } else {
      console.warn('Telegram Mini App initialization failed or running in standalone mode');
    }
    
    // ページの読み込みが完了したことをTelegramに通知
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM content loaded, app is ready');
    });
  }, []);

  // このコンポーネントは何も表示しない
  return null;
}
