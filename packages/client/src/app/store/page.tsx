/**
 * このファイルはストアページコンポーネントです。
 * TONゲームのアイテムストアを表示します。
 * 参考画像に基づいて実装しました。
 */

'use client';

import { useState } from 'react';

export default function StorePage() {
  // タブの状態管理
  const [activeTab, setActiveTab] = useState<'items' | 'skins' | 'effects'>('items');
  
  // ストアアイテムデータ（実際のアプリではAPIから取得）
  const storeItems = [
    {
      id: 1,
      name: 'SCORE BOOSTER',
      description: 'Increase your score by 20% for the next 3 games.',
      price: 500,
      image: '🚀',
      category: 'items',
    },
    {
      id: 2,
      name: 'EXTRA LIFE',
      description: 'Get an extra life in your next game.',
      price: 300,
      image: '❤️',
      category: 'items',
    },
    {
      id: 3,
      name: 'COMBO MULTIPLIER',
      description: 'Double your combo points for the next game.',
      price: 750,
      image: '⚡',
      category: 'items',
    },
    {
      id: 4,
      name: 'NEON SKIN',
      description: 'A neon-themed skin for your player.',
      price: 1000,
      image: '🎨',
      category: 'skins',
    },
    {
      id: 5,
      name: 'EXPLOSION EFFECT',
      description: 'Add explosion effects to perfect hits.',
      price: 850,
      image: '💥',
      category: 'effects',
    },
  ];

  // 現在のタブに基づいてアイテムをフィルタリング
  const filteredItems = storeItems.filter(item => 
    activeTab === 'items' ? item.category === 'items' : 
    activeTab === 'skins' ? item.category === 'skins' : 
    item.category === 'effects'
  );

  return (
    <div className="flex flex-col min-h-screen bg-deep-purple">
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
      </header>
      
      {/* タブナビゲーション */}
      <div className="flex border-b border-gray-700">
        <button 
          onClick={() => setActiveTab('items')}
          className={`flex-1 py-3 text-center text-white font-futuristic ${
            activeTab === 'items' ? 'border-b-2 border-accent-color' : ''
          }`}
        >
          ITEMS
        </button>
        <button 
          onClick={() => setActiveTab('skins')}
          className={`flex-1 py-3 text-center text-white font-futuristic ${
            activeTab === 'skins' ? 'border-b-2 border-accent-color' : ''
          }`}
        >
          SKINS
        </button>
        <button 
          onClick={() => setActiveTab('effects')}
          className={`flex-1 py-3 text-center text-white font-futuristic ${
            activeTab === 'effects' ? 'border-b-2 border-accent-color' : ''
          }`}
        >
          EFFECTS
        </button>
      </div>
      
      <main className="flex-grow p-4">
        <div className="grid grid-cols-1 gap-4">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-black/30 rounded-lg p-4 backdrop-blur-sm"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-neon-purple flex items-center justify-center text-2xl">
                  {item.image}
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-white font-futuristic">{item.name}</h3>
                  <p className="text-white/70 text-xs">{item.description}</p>
                </div>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <span className="mr-1">{item.price}</span>
                  <span>⚡</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center h-40 text-white/50">
            <div className="text-3xl mb-2">🛒</div>
            <div>No items available in this category</div>
          </div>
        )}
      </main>
    </div>
  );
}
