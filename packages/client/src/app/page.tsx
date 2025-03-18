/**
 * このファイルはホームページコンポーネントです。
 * TONゲームのメインダッシュボードを表示します。
 * 提供された参考画像に基づいて実装しました。
 */

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Music, CheckCircle, Play, Zap } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  
  // 初回訪問時にスプラッシュ画面に遷移
  useEffect(() => {
    // セッションストレージをチェックして、初回訪問かどうかを判断
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      // 初回訪問の場合、スプラッシュ画面に遷移
      sessionStorage.setItem('hasVisited', 'true');
      router.push('/splash');
    }
  }, [router]);
  
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
      id: 'follow-x',
      title: 'FOLLOW X',
      description: 'FOLLOW THE SHOUT! X ACCOUNT.',
      progress: 2,
      total: 3,
      reward: 10,
      color: 'blue',
      completed: false
    },
    {
      id: 'follow-telegram',
      title: 'FOLLOW TELEGRAM',
      description: 'FOLLOW THE SHOUT! TELEGRAM ANNOUNCEMENT CHANNEL.',
      progress: 3,
      total: 3,
      reward: 10,
      color: 'green',
      completed: true
    },
    {
      id: 'clear-tutorial',
      title: 'CLEAR TUTORIAL',
      description: 'CLEAR ALL STEPS OF THE TUTORIAL.',
      progress: 25,
      total: 30,
      reward: 10,
      color: 'blue',
      completed: false
    },
    {
      id: 'perfect-combo',
      title: 'PERFECT COMBO',
      description: 'PLAY A SONG WITHOUT MISSING ANY NOTES.',
      progress: 0,
      total: 1,
      reward: 10,
      color: 'blue',
      completed: false
    },
    {
      id: 'max-level',
      title: 'MAX LEVEL',
      description: 'LEVEL UP TO 99.',
      progress: 25,
      total: 99,
      reward: 10,
      color: 'blue',
      completed: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pb-24 bg-deep-purple">
      <header className="bg-user-main/80 backdrop-blur-sm p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-profile flex items-center justify-center text-white font-bold">
            P
          </div>
          <div className="ml-3">
            <h1 className="text-white font-futuristic">RHYTHM MASTER</h1>
            <h2 className="text-white font-futuristic">PLAYER123</h2>
            <div className="flex items-center">
              <div className="flex items-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7h-7.5a2.5 2.5 0 0 0-5 0H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4.5a2.5 2.5 0 0 0 5 0H20a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"></path>
                </svg>
                <span className="text-white ml-1">99</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                <span className="text-white ml-1">9,999</span>
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
        </div>
      </header>
      
      <main className="flex-grow px-4 pt-2">
        {/* イベントバナー */}
        <div className="relative rounded-xl overflow-hidden mb-6 bg-orange-400">
          <div className="h-40 flex items-center justify-center relative">
            {/* NEW EVENTバッジ */}
            <div className="absolute top-0 right-0 bg-red-600 text-white py-1 px-2 text-xs font-bold rotate-90 origin-top-right translate-x-full translate-y-full">
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
            
            {/* ポイント表示 */}
            <div className="absolute top-2 right-2 bg-white/20 text-white text-xs px-2 py-1 rounded-sm flex items-center">
              <span className="mr-1">10+</span>
            </div>
          </div>
          
          {/* ドットナビゲーション */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeSlide 
                    ? 'bg-white' 
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
                      {quest.reward}+
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
                          COMPLETE
                        </span>
                      ) : (
                        `${quest.progress}/${quest.total} COMPLETED`
                      )}
                    </div>
                    
                    {/* 完了マーク */}
                    {quest.completed && (
                      <div className="flex space-x-2">
                        <div className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center">
                          <CheckCircle size={14} />
                        </div>
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
