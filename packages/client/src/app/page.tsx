/**
 * このファイルはホームページコンポーネントです。
 * TONゲームのメインダッシュボードを表示します。
 * 最新の参考画像に基づいて、デザインを更新しました。
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Music, CheckCircle, Play, Zap } from 'lucide-react';

export default function HomePage() {
  // ドットナビゲーション用の状態
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;
  
  // アニメーション用の状態
  const [animateQuest, setAnimateQuest] = useState(false);
  
  // 自動スライド切り替え
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  // クエストアニメーション
  useEffect(() => {
    // ページロード時にアニメーションを開始
    setAnimateQuest(true);
    
    // 定期的にアニメーションをトリガー
    const timer = setInterval(() => {
      setAnimateQuest(false);
      setTimeout(() => setAnimateQuest(true), 100);
    }, 10000);
    
    return () => clearInterval(timer);
  }, []);
  
  // クエストデータ（実際のアプリではAPIから取得）
  const quests = [
    {
      id: 'join-x-1',
      title: 'JOIN X',
      description: 'THIS ID JHGYFOUVY',
      progress: 3,
      total: 3,
      reward: 100,
      color: 'blue',
      completed: false
    },
    {
      id: 'join-x-2',
      title: 'JOIN X',
      description: 'THIS ID JHGYFOUVY',
      progress: 3,
      total: 3,
      reward: 100,
      color: 'green',
      completed: true
    },
    {
      id: 'join-x-3',
      title: 'JOIN X',
      description: 'THIS ID JHGYFOUVY',
      progress: 3,
      total: 3,
      reward: 100,
      color: 'blue',
      completed: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pb-24 bg-deep-purple">
      <header className="bg-user-main/80 backdrop-blur-sm p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-profile flex items-center justify-center text-white font-bold">
            H
          </div>
          <div className="ml-3">
            <h1 className="text-white font-futuristic">HIROS</h1>
            <div className="flex items-center">
              <div className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full flex items-center">
                <span className="mr-1">1,250</span>
                <span className="text-yellow-400">⚡</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="bg-white/10 text-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
          <button className="bg-white/10 text-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>
        </div>
      </header>
      
      <main className="flex-grow px-4 pt-2">
        {/* クエストタイトル */}
        <h2 className="text-white text-xl mb-2">QUESTS</h2>
        
        {/* イベントバナー */}
        <div className="relative rounded-xl overflow-hidden mb-6">
          <div className="bg-black h-40 flex items-center justify-center relative">
            {/* NEW EVENTバッジ */}
            <div className="absolute top-0 right-0 bg-red-600 text-white py-1 px-2 text-xs">
              NEW EVENT
            </div>
            
            {/* コンテンツ */}
            <div className="relative z-10 text-center px-4">
              <div className="flex items-center justify-center">
                <Music className="text-white mr-2" />
                <h2 className="text-2xl font-futuristic tracking-widest text-white">SPRING FEST</h2>
              </div>
              <h3 className="text-3xl font-futuristic tracking-widest text-white">2025</h3>
              <p className="text-white text-xs mt-2">
                PLAY THE LATEST SONGS FROM ED SHEERAN AND EARN POINTS DAILY.
              </p>
            </div>
            
            {/* 背景の円 */}
            <div className="absolute top-4 right-8 w-16 h-16 rounded-full bg-blue-500/20"></div>
            <div className="absolute bottom-4 left-8 w-12 h-12 rounded-full bg-purple-500/20"></div>
          </div>
          
          {/* ドットナビゲーション */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeSlide 
                    ? 'bg-blue-500' 
                    : 'bg-white/40'
                }`}
              ></div>
            ))}
          </div>
        </div>
        
        {/* フィーチャードクエスト */}
        <div className="mb-6">
          <h3 className="text-white text-lg tracking-widest mb-4">FEATURED QUESTS</h3>
          
          <div className="space-y-3">
            {quests.map((quest, index) => (
              <div 
                key={quest.id} 
                className={`rounded-xl overflow-hidden ${
                  quest.completed ? 'bg-green-600' : 'bg-blue-600'
                } ${animateQuest && index === 0 ? 'animate-pulse-subtle' : ''}`}
              >
                <div className="p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-futuristic tracking-wider">{quest.title}</h4>
                      <p className="text-white/80 text-xs">{quest.description}</p>
                    </div>
                    <div className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                      {quest.reward}
                    </div>
                  </div>
                  
                  {/* 進捗バー */}
                  <div className="h-2 bg-black/30 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-green-400"
                      style={{ width: `${(quest.progress / quest.total) * 100}%` }}
                    ></div>
                  </div>
                  
                  {/* 進捗テキスト */}
                  <div className="flex justify-between mt-1">
                    <div className="text-white text-xs">
                      {quest.completed ? (
                        <span className="flex items-center">
                          <CheckCircle size={14} className="mr-1" />
                          {quest.progress}/{quest.total} COMPLETED
                        </span>
                      ) : (
                        `${quest.progress}/${quest.total} COMPLETED`
                      )}
                    </div>
                    
                    {/* プレイボタンとライトニングボタン */}
                    {index === 2 && (
                      <div className="flex space-x-2">
                        <button className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                          <Play size={14} className="ml-0.5" />
                        </button>
                        <button className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                          <Zap size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
