/**
 * このファイルは共有APIクライアントのエントリーポイントです。
 * プロジェクト全体で使用されるAPI関連の型定義と関数をエクスポートします。
 */

// API関連の型定義
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
 * API URLを生成する関数
 * @param path APIパス
 * @param baseUrl ベースURL（デフォルト: '/api'）
 * @returns 完全なAPI URL
 */
export function getApiUrl(path: string, baseUrl: string = '/api'): string {
  // パスが既に完全なURLの場合はそのまま返す
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // パスが/で始まっていない場合は追加する
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // ベースURLの末尾の/を削除する
  const normalizedBaseUrl = baseUrl.endsWith('/') 
    ? baseUrl.slice(0, -1) 
    : baseUrl;
  
  return `${normalizedBaseUrl}${normalizedPath}`;
}

/**
 * クエリパラメータをURLに追加する関数
 * @param url ベースURL
 * @param params クエリパラメータオブジェクト
 * @returns クエリパラメータ付きのURL
 */
export function addQueryParams(url: string, params: Record<string, string | number | boolean | undefined>): string {
  const urlObj = new URL(url, 'http://dummy-base.com');
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      urlObj.searchParams.append(key, String(value));
    }
  });
  
  // ダミーベースURLを使用した場合は、そのパス部分だけを返す
  if (url.startsWith('/')) {
    return `${urlObj.pathname}${urlObj.search}`;
  }
  
  return urlObj.toString();
}
