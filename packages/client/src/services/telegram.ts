/**
 * このファイルはTelegram Mini App SDKの統合を行います。
 * @telegram-apps/sdkを使用して、Telegramとの連携機能を提供します。
 */

import * as SDK from '@telegram-apps/sdk';

/**
 * Telegram Mini Appの初期化を行います。
 * このメソッドはアプリケーションの起動時に呼び出す必要があります。
 */
export function initTelegramMiniApp() {
  try {
    // 垂直スワイプを無効化（ブラウザのスワイプナビゲーションを防止）
    if (SDK.disableVerticalSwipes) {
      SDK.disableVerticalSwipes();
      console.log('Vertical swipes disabled');
    }
    
    // アプリ終了時の確認ダイアログを有効化
    if (SDK.enableClosingConfirmation) {
      SDK.enableClosingConfirmation();
      console.log('Closing confirmation enabled');
    }
    
    // Mini Appの準備完了を通知
    SDK.miniAppReady();
    
    console.log('Telegram Mini App initialized successfully');
    return true;
  } catch (error) {
    console.warn('Telegram Mini App initialization failed:', error);
    return false;
  }
}

/**
 * ユーザー情報を取得します。
 * @returns Telegramユーザー情報、または未認証の場合はnull
 */
export function getTelegramUser() {
  try {
    return SDK.initData?.user || null;
  } catch (error) {
    console.warn('Failed to get Telegram user:', error);
    return null;
  }
}

/**
 * Telegram Mini Appを閉じます。
 */
export function closeTelegramMiniApp() {
  try {
    SDK.closeMiniApp();
  } catch (error) {
    console.warn('Failed to close Telegram Mini App:', error);
  }
}

/**
 * Telegramのクラウド保存機能を使用してデータを保存します。
 * @param key 保存するキー
 * @param value 保存する値
 */
export async function saveToCloud(key: string, value: string): Promise<boolean> {
  try {
    await SDK.cloudStorage?.setItem(key, value);
    return true;
  } catch (error) {
    console.error('Failed to save data to cloud:', error);
    return false;
  }
}

/**
 * Telegramのクラウド保存機能からデータを取得します。
 * @param key 取得するキー
 * @returns 保存された値、またはnull
 */
export async function getFromCloud(key: string): Promise<string | null> {
  try {
    return await SDK.cloudStorage?.getItem(key) || null;
  } catch (error) {
    console.error('Failed to get data from cloud:', error);
    return null;
  }
}
