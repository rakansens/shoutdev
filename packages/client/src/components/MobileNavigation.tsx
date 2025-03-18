/**
 * このファイルはモバイル用のナビゲーションコンポーネントです。
 * モバイルデバイスでのみ表示され、画面下部に固定されます。
 * 参考画像に基づいて更新しました。
 */

'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Crown, ShoppingBag, Settings } from 'lucide-react';

export default function MobileNavigation() {
  const pathname = usePathname();
  
  // 現在のパスに基づいてアクティブなリンクを判定
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-deep-purple border-t border-gray-800 md:hidden z-50">
      <div className="flex justify-around items-center h-16">
        <Link 
          href="/" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/') ? 'text-white' : 'text-gray-400'
          }`}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <span className="text-xs mt-1">HOME</span>
        </Link>
        
        <Link 
          href="/ranking" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/ranking') ? 'text-white' : 'text-gray-400'
          }`}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3v12"></path>
              <path d="M18 9v6"></path>
              <path d="M12 4v16"></path>
              <path d="M12 4a2 2 0 0 0-2 2v1a2 2 0 0 1-2 2 2 2 0 0 1 2 2v1a2 2 0 0 0 2 2"></path>
              <path d="M18 9a2 2 0 0 0-2 2v1a2 2 0 0 1-2 2 2 2 0 0 1 2 2v1a2 2 0 0 0 2 2"></path>
              <path d="M6 3a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 0-2 2v1a2 2 0 0 1-2 2"></path>
            </svg>
          </div>
          <span className="text-xs mt-1">RANKINGS</span>
        </Link>
        
        <Link 
          href="/game" 
          className={`flex flex-col items-center justify-center w-full h-full relative ${
            isActive('/game') ? 'text-white' : 'text-gray-400'
          }`}
        >
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center -mt-8 border-4 border-deep-purple">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </Link>
        
        <Link 
          href="/store" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/store') ? 'text-white' : 'text-gray-400'
          }`}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
              <path d="M3 9v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9"></path>
              <path d="M15 13v2"></path>
              <path d="M9 13v2"></path>
            </svg>
          </div>
          <span className="text-xs mt-1">STORE</span>
        </Link>
        
        <Link 
          href="/profile" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/profile') ? 'text-white' : 'text-gray-400'
          }`}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <span className="text-xs mt-1">SETTINGS</span>
        </Link>
      </div>
    </nav>
  );
}
