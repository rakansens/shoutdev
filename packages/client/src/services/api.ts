/**
 * このファイルはAPIサービスです。
 * バックエンドAPIとの通信を担当します。
 */

// クエストの型定義
export interface Quest {
  id: string;
  title: string;
  description: string;
  reward: number;
  completed: boolean;
  imageUrl: string;
}

// デイリーログインの型定義
export interface DailyLogin {
  day: number;
  reward: number;
  claimed: boolean;
}

// ランキングの型定義
export interface RankingUser {
  id: string;
  username: string;
  points: number;
  rank: number;
  avatarUrl: string;
}

// ストアアイテムの型定義
export interface StoreItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'avatar' | 'item' | 'boost';
}

// ユーザープロフィールの型定義
export interface UserProfile {
  id: string;
  username: string;
  points: number;
  avatarUrl: string;
  level: number;
  experience: number;
  walletAddress?: string;
}

// APIクライアントクラス
class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = '/api';
  }

  // クエスト一覧を取得
  async getQuests(): Promise<Quest[]> {
    // 実際の実装ではAPIからデータを取得
    // ここではモックデータを返す
    return [
      {
        id: '1',
        title: '初めてのゲームプレイ',
        description: 'ゲームを1回プレイしよう',
        reward: 100,
        completed: false,
        imageUrl: '/images/quests/game.png'
      },
      {
        id: '2',
        title: 'フレンド招待',
        description: '友達を3人招待しよう',
        reward: 300,
        completed: false,
        imageUrl: '/images/quests/invite.png'
      },
      {
        id: '3',
        title: 'TONウォレット連携',
        description: 'TONウォレットを連携しよう',
        reward: 500,
        completed: false,
        imageUrl: '/images/quests/wallet.png'
      },
      {
        id: '4',
        title: 'SNSでシェア',
        description: 'ゲーム結果をSNSでシェアしよう',
        reward: 200,
        completed: false,
        imageUrl: '/images/quests/share.png'
      },
      {
        id: '5',
        title: 'プロフィール設定',
        description: 'プロフィールを完成させよう',
        reward: 150,
        completed: false,
        imageUrl: '/images/quests/profile.png'
      }
    ];
  }

  // クエスト完了を報告
  async completeQuest(questId: string): Promise<{ success: boolean }> {
    // 実際の実装ではAPIにPOSTリクエストを送信
    return { success: true };
  }

  // デイリーログイン情報を取得
  async getDailyLogin(): Promise<DailyLogin[]> {
    // 実際の実装ではAPIからデータを取得
    // ここではモックデータを返す
    return [
      { day: 1, reward: 100, claimed: true },
      { day: 2, reward: 200, claimed: true },
      { day: 3, reward: 300, claimed: false },
      { day: 4, reward: 400, claimed: false },
      { day: 5, reward: 500, claimed: false },
      { day: 6, reward: 600, claimed: false },
      { day: 7, reward: 1000, claimed: false }
    ];
  }

  // デイリーログイン報酬を請求
  async claimDailyReward(day: number): Promise<{ success: boolean, reward: number }> {
    // 実際の実装ではAPIにPOSTリクエストを送信
    return { success: true, reward: day * 100 };
  }

  // ランキング情報を取得
  async getRanking(): Promise<RankingUser[]> {
    // 実際の実装ではAPIからデータを取得
    // ここではモックデータを返す
    return [
      { id: '1', username: 'トッププレイヤー', points: 10000, rank: 1, avatarUrl: '/images/avatars/1.png' },
      { id: '2', username: 'チャレンジャー', points: 8500, rank: 2, avatarUrl: '/images/avatars/2.png' },
      { id: '3', username: 'ゲームマスター', points: 7200, rank: 3, avatarUrl: '/images/avatars/3.png' },
      { id: '4', username: 'TONファン', points: 6800, rank: 4, avatarUrl: '/images/avatars/4.png' },
      { id: '5', username: 'クリプトゲーマー', points: 5500, rank: 5, avatarUrl: '/images/avatars/5.png' },
      { id: '6', username: 'ブロックチェーン戦士', points: 4900, rank: 6, avatarUrl: '/images/avatars/6.png' },
      { id: '7', username: 'Web3プレイヤー', points: 4200, rank: 7, avatarUrl: '/images/avatars/7.png' },
      { id: '8', username: 'トークンコレクター', points: 3800, rank: 8, avatarUrl: '/images/avatars/8.png' },
      { id: '9', username: 'デジタルアスリート', points: 3500, rank: 9, avatarUrl: '/images/avatars/9.png' },
      { id: '10', username: 'ゲームチャンピオン', points: 3200, rank: 10, avatarUrl: '/images/avatars/10.png' }
    ];
  }

  // ストアアイテム一覧を取得
  async getStoreItems(): Promise<StoreItem[]> {
    // 実際の実装ではAPIからデータを取得
    // ここではモックデータを返す
    return [
      { id: '1', name: 'プレミアムアバター', description: '限定デザインのアバター', price: 1000, imageUrl: '/images/store/avatar1.png', category: 'avatar' },
      { id: '2', name: 'ゴールドフレーム', description: 'プロフィールを輝かせるフレーム', price: 800, imageUrl: '/images/store/frame1.png', category: 'avatar' },
      { id: '3', name: 'エクスペリエンスブースター', description: '獲得経験値が2倍になる（24時間）', price: 1500, imageUrl: '/images/store/boost1.png', category: 'boost' },
      { id: '4', name: 'ポイントブースター', description: '獲得ポイントが1.5倍になる（24時間）', price: 1200, imageUrl: '/images/store/boost2.png', category: 'boost' },
      { id: '5', name: 'レアアイテムボックス', description: 'レアアイテムがランダムで手に入る', price: 2000, imageUrl: '/images/store/box1.png', category: 'item' },
      { id: '6', name: 'エモート：勝利', description: 'ゲーム内で使用できる勝利のエモート', price: 500, imageUrl: '/images/store/emote1.png', category: 'item' },
      { id: '7', name: 'エモート：驚き', description: 'ゲーム内で使用できる驚きのエモート', price: 500, imageUrl: '/images/store/emote2.png', category: 'item' },
      { id: '8', name: 'VIPステータス', description: '1週間のVIPステータス', price: 3000, imageUrl: '/images/store/vip.png', category: 'boost' }
    ];
  }

  // ストアアイテムを購入
  async purchaseItem(itemId: string): Promise<{ success: boolean }> {
    // 実際の実装ではAPIにPOSTリクエストを送信
    return { success: true };
  }

  // ユーザープロフィールを取得
  async getUserProfile(): Promise<UserProfile> {
    // 実際の実装ではAPIからデータを取得
    // ここではモックデータを返す
    return {
      id: '1',
      username: 'ユーザー',
      points: 1500,
      avatarUrl: '/images/avatars/default.png',
      level: 5,
      experience: 450
    };
  }

  // ユーザープロフィールを更新
  async updateUserProfile(profile: Partial<UserProfile>): Promise<{ success: boolean }> {
    // 実際の実装ではAPIにPUTリクエストを送信
    return { success: true };
  }
}

// シングルトンインスタンスを作成
let apiClientInstance: ApiClient | null = null;

export function getApiClient(): ApiClient {
  if (!apiClientInstance) {
    apiClientInstance = new ApiClient();
  }
  return apiClientInstance;
}
