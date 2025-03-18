/**
 * このファイルは共有APIクライアントのエントリーポイントです。
 * プロジェクト全体で使用されるAPIクライアントをエクスポートします。
 */

import { ApiResponse } from '../types';

/**
 * APIリクエストを送信する基本関数
 * @param url リクエスト先のURL
 * @param options リクエストオプション
 * @returns APIレスポンス
 */
export async function fetchApi<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: {
          message: data.message || 'APIリクエストに失敗しました',
          code: data.code || 'UNKNOWN_ERROR',
        },
      };
    }

    return {
      success: true,
      data: data as T,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        message: error instanceof Error ? error.message : '不明なエラーが発生しました',
        code: 'FETCH_ERROR',
      },
    };
  }
}

/**
 * クエスト関連のAPIクライアント
 */
export const questsApi = {
  /**
   * クエスト一覧を取得する
   * @returns クエスト一覧
   */
  getQuests: () => fetchApi('/api/quests'),

  /**
   * クエストを取得する
   * @param id クエストID
   * @returns クエスト
   */
  getQuest: (id: string) => fetchApi(`/api/quests/${id}`),

  /**
   * クエストを完了する
   * @param id クエストID
   * @returns 完了結果
   */
  completeQuest: (id: string) => fetchApi(`/api/quests/${id}/complete`, {
    method: 'POST',
  }),
};

/**
 * ユーザー関連のAPIクライアント
 */
export const usersApi = {
  /**
   * ユーザー情報を取得する
   * @returns ユーザー情報
   */
  getProfile: () => fetchApi('/api/users/profile'),

  /**
   * ユーザー情報を更新する
   * @param data 更新データ
   * @returns 更新結果
   */
  updateProfile: (data: any) => fetchApi('/api/users/profile', {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
};

/**
 * デイリーログイン関連のAPIクライアント
 */
export const dailyLoginApi = {
  /**
   * デイリーログインを実行する
   * @returns ログイン結果
   */
  login: () => fetchApi('/api/daily-login', {
    method: 'POST',
  }),

  /**
   * デイリーログイン履歴を取得する
   * @returns ログイン履歴
   */
  getHistory: () => fetchApi('/api/daily-login/history'),
};

/**
 * ランキング関連のAPIクライアント
 */
export const rankingApi = {
  /**
   * ランキングを取得する
   * @param type ランキングタイプ
   * @returns ランキング
   */
  getRanking: (type: string) => fetchApi(`/api/ranking?type=${type}`),
};

/**
 * ストア関連のAPIクライアント
 */
export const storeApi = {
  /**
   * ストアアイテム一覧を取得する
   * @returns アイテム一覧
   */
  getItems: () => fetchApi('/api/store'),

  /**
   * アイテムを購入する
   * @param id アイテムID
   * @param quantity 数量
   * @returns 購入結果
   */
  purchaseItem: (id: string, quantity: number = 1) => fetchApi('/api/store/purchase', {
    method: 'POST',
    body: JSON.stringify({ id, quantity }),
  }),
};
