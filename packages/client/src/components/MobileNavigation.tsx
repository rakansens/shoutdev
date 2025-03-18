/**
 * このファイルはモバイル用のナビゲーションコンポーネントです。
 * モバイルデバイスでのみ表示され、画面下部に固定されます。
 */

'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Trophy, Gift, Gamepad, User } from 'lucide-react';

export default function MobileNavigation() {
  const pathname = usePathname();
  
  // 現在のパスに基づいてアクティブなリンクを判定
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-user-background border-t border-gray-800 md:hidden z-50">
      <div className="flex justify-around items-center h-16">
        <Link 
          href="/" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/') ? 'text-accent-color' : 'text-gray-400'
          }`}
        >
          <Home size={20} />
          <span className="text-xs mt-1">ホーム</span>
        </Link>
        
        <Link 
          href="/ranking" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/ranking') ? 'text-accent-color' : 'text-gray-400'
          }`}
        >
          <Trophy size={20} />
          <span className="text-xs mt-1">ランキング</span>
        </Link>
        
        <Link 
          href="/quests" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/quests') ? 'text-accent-color' : 'text-gray-400'
          }`}
        >
          <Gift size={20} />
          <span className="text-xs mt-1">クエスト</span>
        </Link>
        
        <Link 
          href="/game" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/game') ? 'text-accent-color' : 'text-gray-400'
          }`}
        >
          <Gamepad size={20} />
          <span className="text-xs mt-1">ゲーム</span>
        </Link>
        
        <Link 
          href="/profile" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/profile') ? 'text-accent-color' : 'text-gray-400'
          }`}
        >
          <User size={20} />
          <span className="text-xs mt-1">プロフィール</span>
        </Link>
      </div>
    </nav>
  );
}
