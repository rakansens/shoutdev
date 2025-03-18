/**
 * このファイルはAPI関連の型定義を提供します。
 */

// API関連の基本型定義
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
  };
}

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
