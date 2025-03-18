/**
 * このファイルはゲームページコンポーネントです。
 * TONゲームのゲーム選択・プレイ画面を表示します。
 * 参考画像に基づいて実装しました。
 */

'use client';

import { useState } from 'react';

export default function GamePage() {
  // ゲームの状態管理
  const [gameState, setGameState] = useState<'select' | 'loading' | 'playing'>('select');
  
  // 選択された曲
  const [selectedSong, setSelectedSong] = useState<number | null>(null);
  
  // 曲データ（実際のアプリではAPIから取得）
  const songs = [
    {
      id: 1,
      title: 'SAKURA DRE',
      artist: 'DJ SAKURA',
      difficulty: 4,
      duration: '3:45',
      image: '🌸',
      type: 'green',
    },
    {
      id: 2,
      title: 'CYBER NINJA',
      artist: 'TECH MASTERS',
      difficulty: 5,
      duration: '4:20',
      image: '🥷',
      type: 'blue',
    },
    {
      id: 3,
      title: 'NEON LIGHTS',
      artist: 'CITY PULSE',
      difficulty: 3,
      duration: '3:10',
      image: '🌃',
      type: 'green',
    },
    {
      id: 4,
      title: 'DIGITAL DREAM',
      artist: 'VIRTUAL VIBES',
      difficulty: 4,
      duration: '3:30',
      image: '💫',
      type: 'blue',
    },
  ];

  // 曲の種類に基づいたスタイルを取得する関数
  const getSongStyle = (type: string) => {
    return type === 'green' 
      ? 'bg-gradient-neon-green' 
      : 'bg-gradient-neon-blue';
  };

  // 難易度を星で表示する関数
  const renderDifficulty = (level: number) => {
    return Array(5).fill(0).map((_, index) => (
      <span key={index} className={index < level ? 'text-yellow-400' : 'text-gray-600'}>★</span>
    ));
  };

  // 曲を選択する関数
  const selectSong = (id: number) => {
    setSelectedSong(id);
    // 実際のアプリではここでゲームの読み込みを開始
    setGameState('loading');
    
    // 読み込み完了後にゲームを開始（デモ用のタイマー）
    setTimeout(() => {
      setGameState('playing');
    }, 2000);
  };

  // ゲームをリセットする関数
  const resetGame = () => {
    setSelectedSong(null);
    setGameState('select');
  };

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
        
        {gameState !== 'select' && (
          <button 
            onClick={resetGame}
            className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
          >
            Back
          </button>
        )}
      </header>
      
      <main className="flex-grow p-4">
        {/* 曲選択画面 */}
        {gameState === 'select' && (
          <div className="space-y-4">
            <h3 className="text-white text-lg font-futuristic mb-4">SELECT SONG</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {songs.map((song) => (
                <div 
                  key={song.id} 
                  className={`rounded-lg overflow-hidden cursor-pointer ${getSongStyle(song.type)}`}
                  onClick={() => selectSong(song.id)}
                >
                  <div className="p-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-lg bg-black/30 flex items-center justify-center text-2xl">
                        {song.image}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-futuristic">{song.title}</h4>
                        <p className="text-white/80 text-xs">{song.artist}</p>
                        <div className="flex items-center mt-1">
                          <div className="text-xs mr-2">
                            {renderDifficulty(song.difficulty)}
                          </div>
                          <div className="text-white/80 text-xs">
                            {song.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* 読み込み画面 */}
        {gameState === 'loading' && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white mt-4 font-futuristic">LOADING...</p>
            <p className="text-white/50 text-sm mt-2">Preparing your rhythm experience</p>
          </div>
        )}
        
        {/* ゲームプレイ画面 */}
        {gameState === 'playing' && selectedSong && (
          <div className="flex flex-col items-center h-full">
            <div className="text-white font-futuristic text-xl mb-4">
              {songs.find(s => s.id === selectedSong)?.title}
            </div>
            
            {/* ゲーム画面のプレースホルダー（実際のアプリではUnity WebGLが表示される） */}
            <div className="w-full h-80 bg-black/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <p className="text-white font-futuristic">UNITY WEBGL GAME</p>
                <p className="text-white/50 text-sm mt-2">Rhythm game would be displayed here</p>
              </div>
            </div>
            
            {/* スコア表示 */}
            <div className="mt-6 w-full">
              <div className="flex justify-between items-center">
                <div className="text-white">
                  <div className="text-sm opacity-70">SCORE</div>
                  <div className="text-2xl font-futuristic">0</div>
                </div>
                <div className="text-white">
                  <div className="text-sm opacity-70">COMBO</div>
                  <div className="text-2xl font-futuristic">0</div>
                </div>
                <div className="text-white">
                  <div className="text-sm opacity-70">ACCURACY</div>
                  <div className="text-2xl font-futuristic">0%</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
