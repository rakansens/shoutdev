/**
 * このファイルはTON SDKに関連する型定義を提供します。
 */

// TON SDKの基本的な機能をシミュレートしたインターフェース
export interface TonSdkInterface {
  connect(): Promise<boolean>;
  getAddress(): Promise<string>;
  signMessage(message: string): Promise<string>;
  sendTransaction(to: string, amount: string, payload?: string): Promise<string>;
  getBalance(): Promise<string>;
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
