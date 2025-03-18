/**
 * このファイルは管理者ダッシュボードページのコンポーネントです。
 * 管理者向けのダッシュボード情報を表示します。
 */

'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/layout/AdminLayout';
import { BarChart3, Users, Gift, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    completedQuests: 0,
    pendingQuests: 0,
    totalTransactions: 0,
    tonVolume: 0
  });
  
  const [isLoading, setIsLoading] = useState(true);
  
  // データ取得のシミュレーション
  useEffect(() => {
    const fetchData = async () => {
      // 実際の実装では、APIからデータを取得する
      // 現在はモックデータを使用
      setTimeout(() => {
        setStats({
          totalUsers: 1250,
          activeUsers: 843,
          completedQuests: 3621,
          pendingQuests: 142,
          totalTransactions: 5280,
          tonVolume: 12580
        });
        setIsLoading(false);
      }, 1000);
    };
    
    fetchData();
  }, []);
  
  return (
    <AdminLayout title="ダッシュボード">
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* 統計カード */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="admin-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">総ユーザー数</p>
                  <h3 className="text-2xl font-bold">{stats.totalUsers}</h3>
                  <p className="text-green-500 text-sm">+12% 先週比</p>
                </div>
                <div className="bg-purple-800 p-3 rounded-lg">
                  <Users size={24} />
                </div>
              </div>
            </div>
            
            <div className="admin-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">アクティブユーザー</p>
                  <h3 className="text-2xl font-bold">{stats.activeUsers}</h3>
                  <p className="text-green-500 text-sm">+5% 先週比</p>
                </div>
                <div className="bg-purple-800 p-3 rounded-lg">
                  <Users size={24} />
                </div>
              </div>
            </div>
            
            <div className="admin-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">完了クエスト</p>
                  <h3 className="text-2xl font-bold">{stats.completedQuests}</h3>
                  <p className="text-green-500 text-sm">+18% 先週比</p>
                </div>
                <div className="bg-purple-800 p-3 rounded-lg">
                  <Gift size={24} />
                </div>
              </div>
            </div>
            
            <div className="admin-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">TON取引量</p>
                  <h3 className="text-2xl font-bold">{stats.tonVolume}</h3>
                  <p className="text-green-500 text-sm">+8% 先週比</p>
                </div>
                <div className="bg-purple-800 p-3 rounded-lg">
                  <TrendingUp size={24} />
                </div>
              </div>
            </div>
          </div>
          
          {/* グラフセクション */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="admin-card">
              <h3 className="text-lg font-bold mb-4">ユーザー登録推移</h3>
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-400">グラフコンポーネントがここに表示されます</p>
              </div>
            </div>
            
            <div className="admin-card">
              <h3 className="text-lg font-bold mb-4">クエスト完了数</h3>
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-400">グラフコンポーネントがここに表示されます</p>
              </div>
            </div>
          </div>
          
          {/* 最近のアクティビティ */}
          <div className="admin-card">
            <h3 className="text-lg font-bold mb-4">最近のアクティビティ</h3>
            <div className="overflow-x-auto">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ユーザー</th>
                    <th>アクション</th>
                    <th>日時</th>
                    <th>ステータス</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>user123</td>
                    <td>クエスト完了</td>
                    <td>2025/03/17 15:30</td>
                    <td><span className="badge-new">成功</span></td>
                  </tr>
                  <tr>
                    <td>user456</td>
                    <td>TON送金</td>
                    <td>2025/03/17 14:22</td>
                    <td><span className="badge-new">成功</span></td>
                  </tr>
                  <tr>
                    <td>user789</td>
                    <td>新規登録</td>
                    <td>2025/03/17 13:45</td>
                    <td><span className="badge-new">成功</span></td>
                  </tr>
                  <tr>
                    <td>user234</td>
                    <td>アイテム購入</td>
                    <td>2025/03/17 12:18</td>
                    <td><span className="badge-new">成功</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
