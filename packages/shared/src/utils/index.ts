/**
 * このファイルは共有ユーティリティ関数のエントリーポイントです。
 * プロジェクト全体で使用されるユーティリティ関数をエクスポートします。
 */

/**
 * 日付をフォーマットする関数
 * @param date フォーマットする日付
 * @param format フォーマット（デフォルト: 'YYYY-MM-DD'）
 * @returns フォーマットされた日付文字列
 */
export function formatDate(date: Date | string, format: string = 'YYYY-MM-DD'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  
  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * 数値を通貨形式にフォーマットする関数
 * @param value フォーマットする数値
 * @param currency 通貨記号（デフォルト: '¥'）
 * @returns フォーマットされた通貨文字列
 */
export function formatCurrency(value: number, currency: string = '¥'): string {
  return `${currency}${value.toLocaleString()}`;
}

/**
 * 文字列を省略する関数
 * @param text 省略する文字列
 * @param maxLength 最大長（デフォルト: 50）
 * @returns 省略された文字列
 */
export function truncateText(text: string, maxLength: number = 50): string {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.substring(0, maxLength)}...`;
}

/**
 * ランダムなIDを生成する関数
 * @param length IDの長さ（デフォルト: 16）
 * @returns ランダムなID
 */
export function generateId(length: number = 16): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * オブジェクトをディープコピーする関数
 * @param obj コピーするオブジェクト
 * @returns コピーされたオブジェクト
 */
export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * 配列をシャッフルする関数
 * @param array シャッフルする配列
 * @returns シャッフルされた配列
 */
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
