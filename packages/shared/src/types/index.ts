/**
 * このファイルは共有型定義のエントリーポイントです。
 * プロジェクト全体で使用される型定義をエクスポートします。
 */

// ユーザー関連の型定義
export interface UserType {
  id: string;
  telegram_id?: string;
  username?: string;
  metadata?: Record<string, any>;
  created_at: string;
}

// クエスト関連の型定義
export interface QuestType {
  id: string;
  title: string;
  description: string;
  points: number;
  status: 'draft' | 'pending' | 'published' | 'rejected';
  requirements?: Record<string, any>;
  created_at: string;
}

export interface UserQuestType {
  id: string;
  user_id: string;
  quest_id: string;
  completed: boolean;
  completed_at?: string;
}

// デイリーログイン関連の型定義
export interface DailyLoginType {
  id: string;
  user_id: string;
  streak: number;
  points: number;
  login_at: string;
}

// ゲームセッション関連の型定義
export interface GameSessionType {
  id: string;
  user_id: string;
  score: number;
  points_spent: number;
  played_at: string;
}

// ストア関連の型定義
export interface StoreItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  effects?: Record<string, any>;
  created_at: string;
}

export interface UserItemType {
  id: string;
  user_id: string;
  item_id: string;
  quantity: number;
  purchased_at: string;
}

// API関連の型定義
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
  };
}
