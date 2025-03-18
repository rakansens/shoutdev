/**
 * このファイルはプロフィールページコンポーネントです。
 * TONゲームのユーザープロフィールを表示します。
 * 提供された参考画像に基づいて実装しました。
 */

'use client';

import { useState } from 'react';

export default function ProfilePage() {
  // タブの状態管理
  const [activeTab, setActiveTab] = useState<'stats' | 'achievements' | 'history'>('stats');
  
  // ユーザーデータ（実際のアプリではAPIから取得）
  const userData = {
    username: 'PLAYER123',
    level: 42,
    points: 12500,
    totalGames: 156,
    winRate: 78,
    highScore: 98765,
    rank: 6,
    achievements: [
      { id: 1, name: 'FIRST WIN', description: 'Win your first game', completed: true },
      { id: 2, name: 'PERFECT COMBO', description: 'Get a perfect combo', completed: true },
      { id: 3, name: 'MASTER PLAYER', description: 'Reach level 50', completed: false },
    ],
    recentGames: [
      { id: 1, song: 'CYBER NINJA', score: 95432, date: '2025-03-17', result: 'win' },
      { id: 2, song: 'SAKURA DRE', score: 87654, date: '2025-03-16', result: 'win' },
      { id: 3, song: 'CYBER NINJA', score: 76543, date: '2025-03-15', result: 'loss' },
    ]
  };

  // 統計データ
  const statsData = [
    { label: 'LEVEL', value: userData.level },
    { label: 'POINTS', value: userData.points },
    { label: 'GAMES', value: userData.totalGames },
    { label: 'WIN RATE', value: `${userData.winRate}%` },
    { label: 'HIGH SCORE', value: userData.highScore },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-deep-purple">
      <header className="bg-user-main/80 backdrop-blur-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-profile flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <div className="ml-4">
              <h1 className="text-white font-futuristic text-xl">RHYTHM MASTER</h1>
              <h2 className="text-white font-futuristic text-2xl">PLAYER123</h2>
              <div className="flex items-center mt-1">
                <div className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                  LEVEL {userData.level}
                </div>
                <div className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full ml-2 flex items-center">
                  <span className="mr-1">{userData.points}</span>
                  <span className="text-yellow-400">⚡</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
            <span className="font-bold">{userData.rank}</span>
          </div>
        </div>
      </header>
      
      {/* タブナビゲーション */}
      <div className="flex border-b border-gray-700">
        <button 
          onClick={() => setActiveTab('stats')}
          className={`flex-1 py-3 text-center text-white font-futuristic ${
            activeTab === 'stats' ? 'border-b-2 border-accent-color' : ''
          }`}
        >
          STATS
        </button>
        <button 
          onClick={() => setActiveTab('achievements')}
          className={`flex-1 py-3 text-center text-white font-futuristic ${
            activeTab === 'achievements' ? 'border-b-2 border-accent-color' : ''
          }`}
        >
          ACHIEVEMENTS
        </button>
        <button 
          onClick={() => setActiveTab('history')}
          className={`flex-1 py-3 text-center text-white font-futuristic ${
            activeTab === 'history' ? 'border-b-2 border-accent-color' : ''
          }`}
        >
          HISTORY
        </button>
      </div>
      
      <main className="flex-grow p-4">
        {/* 統計タブ */}
        {activeTab === 'stats' && (
          <div className="space-y-4">
            <h3 className="text-white text-lg font-futuristic">PLAYER STATISTICS</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {statsData.map((stat, index) => (
                <div key={index} className="bg-black/30 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-white/70 text-sm">{stat.label}</div>
                  <div className="text-white text-xl font-futuristic mt-1">{stat.value}</div>
                </div>
              ))}
            </div>
            
            {/* レーダーチャート（実際のアプリではチャートライブラリを使用） */}
            <div className="mt-6">
              <h3 className="text-white text-lg font-futuristic mb-2">SKILL BREAKDOWN</h3>
              <div className="bg-black/30 rounded-lg p-4 h-48 flex items-center justify-center backdrop-blur-sm">
                <div className="text-white/50 text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <div>スキルレーダーチャート</div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* 実績タブ */}
        {activeTab === 'achievements' && (
          <div className="space-y-4">
            <h3 className="text-white text-lg font-futuristic">ACHIEVEMENTS</h3>
            
            <div className="space-y-3">
              {userData.achievements.map((achievement) => (
                <div 
                  key={achievement.id} 
                  className={`rounded-lg p-4 ${
                    achievement.completed ? 'bg-green-600/30' : 'bg-black/30'
                  } backdrop-blur-sm`}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      achievement.completed ? 'bg-green-500' : 'bg-gray-700'
                    }`}>
                      {achievement.completed ? '✓' : '?'}
                    </div>
                    <div className="ml-3">
                      <div className="text-white font-futuristic">{achievement.name}</div>
                      <div className="text-white/70 text-sm">{achievement.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* 履歴タブ */}
        {activeTab === 'history' && (
          <div className="space-y-4">
            <h3 className="text-white text-lg font-futuristic">RECENT GAMES</h3>
            
            <div className="space-y-3">
              {userData.recentGames.map((game) => (
                <div 
                  key={game.id} 
                  className={`rounded-lg p-4 ${
                    game.result === 'win' ? 'bg-blue-600/30' : 'bg-red-600/30'
                  } backdrop-blur-sm`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white font-futuristic">{game.song}</div>
                      <div className="text-white/70 text-sm">{game.date}</div>
                    </div>
                    <div>
                      <div className="text-white text-right font-futuristic">{game.score}</div>
                      <div className={`text-xs ${
                        game.result === 'win' ? 'text-green-400' : 'text-red-400'
                      } text-right`}>
                        {game.result.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
