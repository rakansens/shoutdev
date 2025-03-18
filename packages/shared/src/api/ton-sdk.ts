/**
 * このファイルはTON SDKの統合用ユーティリティです。
 * TON SDKミニアップの機能を提供します。
 */

// TON SDKの基本的な機能をシミュレートしたインターフェース
export interface TonSdkInterface {
  connect(): Promise<boolean>;
  getAddress(): Promise<string>;
  signMessage(message: string): Promise<string>;
  sendTransaction(to: string, amount: string, payload?: string): Promise<string>;
  getBalance(): Promise<string>;
}

// TON SDKミニアップの実装
class TonSdkMiniApp implements TonSdkInterface {
  private isConnected: boolean = false;
  private userAddress: string | null = null;

  constructor() {
    // Telegram Mini Appの環境かどうかを検出
    if (typeof window !== 'undefined') {
      this.detectTelegramWebApp();
    }
  }

  private detectTelegramWebApp() {
    // @ts-ignore
    if (window.Telegram && window.Telegram.WebApp) {
      console.log('Telegram WebApp detected');
      this.initTelegramWebApp();
    } else {
      console.log('Telegram WebApp not detected, using fallback');
    }
  }

  private initTelegramWebApp() {
    // @ts-ignore
    const webApp = window.Telegram.WebApp;
    webApp.ready();
    webApp.expand();
  }

  async connect(): Promise<boolean> {
    try {
      // 実際の実装ではTON Walletへの接続処理を行う
      // ここではモック実装
      this.isConnected = true;
      this.userAddress = '0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
      return true;
    } catch (error) {
      console.error('Failed to connect to TON wallet:', error);
      return false;
    }
  }

  async getAddress(): Promise<string> {
    if (!this.isConnected) {
      throw new Error('Not connected to TON wallet');
    }
    return this.userAddress || '';
  }

  async signMessage(message: string): Promise<string> {
    if (!this.isConnected) {
      throw new Error('Not connected to TON wallet');
    }
    // 実際の実装ではTON Walletでメッセージ署名を行う
    // ここではモック実装
    return `signed:${message}:${Date.now()}`;
  }

  async sendTransaction(to: string, amount: string, payload?: string): Promise<string> {
    if (!this.isConnected) {
      throw new Error('Not connected to TON wallet');
    }
    // 実際の実装ではTON Walletでトランザクション送信を行う
    // ここではモック実装
    return `tx:${to}:${amount}:${Date.now()}`;
  }

  async getBalance(): Promise<string> {
    if (!this.isConnected) {
      throw new Error('Not connected to TON wallet');
    }
    // 実際の実装ではTON Walletから残高を取得する
    // ここではモック実装
    return '10.5';
  }
}

// シングルトンインスタンスを作成
let tonSdkInstance: TonSdkInterface | null = null;

export function getTonSdk(): TonSdkInterface {
  if (!tonSdkInstance) {
    tonSdkInstance = new TonSdkMiniApp();
  }
  return tonSdkInstance;
}

// Telegram WebApp APIの型定義
export interface TelegramWebApp {
  ready: () => void;
  expand: () => void;
  close: () => void;
  initData: string;
  initDataUnsafe: {
    user?: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
    };
  };
}

// Telegramユーザー情報を取得する関数
export function getTelegramUser() {
  if (typeof window === 'undefined') {
    return null;
  }
  
  // @ts-ignore
  if (window.Telegram && window.Telegram.WebApp) {
    // @ts-ignore
    const webApp = window.Telegram.WebApp as TelegramWebApp;
    return webApp.initDataUnsafe.user;
  }
  return null;
}
