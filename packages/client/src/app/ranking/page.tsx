/**
 * このファイルはランキングページコンポーネントです。
 * TONゲームのユーザーランキングを表示します。
 * 提供された参考画像に基づいて実装しました。
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function RankingPage() {
  // タブの状態管理
  const [activeTab, setActiveTab] = useState<'weekly' | 'monthly' | 'alltime'>('weekly');
  
  // ランキングデータ（実際のアプリではAPIから取得）
  const rankingData = [
    {
      id: 1,
      username: 'PLAYER123',
      avatar: '/placeholder-avatar.png', // プレースホルダー画像
      song: 'SAKURA DRE',
      songType: 'green', // green or blue
      rank: 1,
      rankType: 'gold', // gold, silver, bronze, normal
    },
    {
      id: 2,
      username: 'PLAYER123',
      avatar: '/placeholder-avatar.png',
      song: 'CYBER NINJA',
      songType: 'blue',
      rank: 2,
      rankType: 'silver',
    },
    {
      id: 3,
      username: 'PLAYER123',
      avatar: '/placeholder-avatar.png',
      song: 'SAKURA DRE',
      songType: 'green',
      rank: 3,
      rankType: 'bronze',
    },
    {
      id: 4,
      username: 'PLAYER123',
      avatar: '/placeholder-avatar.png',
      song: 'CYBER NINJA',
      songType: 'blue',
      rank: 4,
      rankType: 'normal',
    },
    {
      id: 5,
      username: 'PLAYER123',
      avatar: '/placeholder-avatar.png',
      song: 'SAKURA DRE',
      songType: 'green',
      rank: 5,
      rankType: 'normal',
    },
    {
      id: 6,
      username: 'PLAYER123',
      avatar: '/placeholder-avatar.png',
      song: 'CYBER NINJA',
      songType: 'blue',
      rank: 6,
      rankType: 'normal',
    },
    {
      id: 7,
      username: 'PLAYER123',
      avatar: '/placeholder-avatar.png',
      song: 'SAKURA DRE',
      songType: 'green',
      rank: 7,
      rankType: 'normal',
    },
    {
      id: 8,
      username: 'PLAYER123',
      avatar: '/placeholder-avatar.png',
      song: 'CYBER NINJA',
      songType: 'blue',
      rank: 8,
      rankType: 'normal',
    },
    {
      id: 9,
      username: 'PLAYER123',
      avatar: '/placeholder-avatar.png',
      song: 'SAKURA DRE',
      songType: 'green',
      rank: 9,
      rankType: 'normal',
    },
    {
      id: 10,
      username: 'PLAYER123',
      avatar: '/placeholder-avatar.png',
      song: 'CYBER NINJA',
      songType: 'blue',
      rank: 10,
      rankType: 'normal',
    },
  ];

  // ランクの背景色とスタイルを取得する関数
  const getRankStyle = (rankType: string) => {
    switch (rankType) {
      case 'gold':
        return 'bg-yellow-500 text-black';
      case 'silver':
        return 'bg-gray-300 text-black';
      case 'bronze':
        return 'bg-orange-700 text-white';
      default:
        return 'bg-white text-black';
    }
  };

  // 曲タイプに基づいたスタイルを取得する関数
  const getSongStyle = (songType: string) => {
    return songType === 'green' 
      ? 'bg-green-500 text-white' 
      : 'bg-blue-500 text-white';
  };

  // ランキング項目がハイライトされているかどうかを判定する関数
  const isHighlighted = (rank: number) => {
    return rank === 6; // 6位の項目をハイライト（画像参照）
  };

  return (
    <div className="flex flex-col min-h-screen bg-deep-purple">
      <header className="bg-user-main/80 backdrop-blur-sm p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-profile flex items-center justify-center text-white font-bold">
            H
          </div>
          <div className="ml-3">
            <h1 className="text-white font-futuristic">RHYTHM MASTER</h1>
            <h2 className="text-white font-futuristic text-xl">PLAYER123</h2>
          </div>
        </div>
        <div className="bg-white rounded-full px-4 py-1">
          <span className="font-bold">6</span>
        </div>
      </header>
      
      <div className="text-center text-white text-sm mt-2 opacity-70">
        TAP TO JUMP
      </div>
      
      <main className="flex-grow px-4 pt-4">
        {/* タブナビゲーション */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => setActiveTab('weekly')}
            className={`text-white text-xl font-futuristic ${activeTab === 'weekly' ? 'opacity-100' : 'opacity-50'}`}
          >
            WEEKLY
          </button>
          
          <div className="flex space-x-4">
            <button className="bg-white/10 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </button>
            
            <button className="bg-white/10 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
            </button>
          </div>
        </div>
        
        {/* ランキングリスト */}
        <div className="space-y-3">
          {rankingData.map((item) => (
            <div 
              key={item.id}
              className={`rounded-full overflow-hidden ${
                isHighlighted(item.rank) 
                  ? 'border-2 border-yellow-400' 
                  : 'border border-gray-700'
              } bg-black/40 backdrop-blur-sm`}
            >
              <div className="flex items-center p-2">
                {/* アバター */}
                <div className="w-12 h-12 rounded-full bg-gradient-profile overflow-hidden mr-3">
                  <div className="w-full h-full flex items-center justify-center text-white font-bold">
                    {/* 実際のアプリでは画像を表示 */}
                    {/* <Image src={item.avatar} alt={item.username} width={48} height={48} /> */}
                    P
                  </div>
                </div>
                
                {/* ユーザー情報 */}
                <div className="flex-grow">
                  <h3 className="text-white font-futuristic">RHYTHM MASTER</h3>
                  <h4 className="text-white font-futuristic text-lg">PLAYER123</h4>
                </div>
                
                {/* 曲名 */}
                <div className={`px-3 py-1 rounded-full mr-3 ${getSongStyle(item.songType)}`}>
                  <div className="flex items-center">
                    <span className="mr-1">♪</span>
                    <span>{item.song}</span>
                  </div>
                </div>
                
                {/* ランク */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${getRankStyle(item.rankType)}`}>
                  {item.rank}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
