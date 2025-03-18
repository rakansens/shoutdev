/**
 * このファイルは管理者ページのレイアウトコンポーネントです。
 * 管理者ページ全体で共通のレイアウトを提供します。
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Users, 
  Gift, 
  BarChart3, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // 画面サイズに応じてモバイル表示を切り替え
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  // 現在のパスに基づいてアクティブなリンクを判定
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  // サイドバートグル
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-admin-background text-white flex">
      {/* モバイルメニューボタン */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-purple-900 p-2 rounded-md"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* サイドバー */}
      <div 
        className={`fixed md:static top-0 left-0 h-full bg-purple-900 transition-all duration-300 ease-in-out z-40 ${
          isSidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full md:w-20 md:translate-x-0'
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center justify-center mb-8 mt-4">
            <h1 className={`text-xl font-bold ${!isSidebarOpen && 'md:hidden'}`}>TON管理パネル</h1>
          </div>
          
          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/admin" 
                  className={`flex items-center p-3 rounded-md transition-colors ${
                    isActive('/admin') 
                      ? 'bg-purple-800 text-white' 
                      : 'hover:bg-purple-800/50'
                  }`}
                >
                  <BarChart3 size={20} />
                  <span className={`ml-3 ${!isSidebarOpen && 'md:hidden'}`}>ダッシュボード</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/users" 
                  className={`flex items-center p-3 rounded-md transition-colors ${
                    isActive('/admin/users') 
                      ? 'bg-purple-800 text-white' 
                      : 'hover:bg-purple-800/50'
                  }`}
                >
                  <Users size={20} />
                  <span className={`ml-3 ${!isSidebarOpen && 'md:hidden'}`}>ユーザー管理</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/quests" 
                  className={`flex items-center p-3 rounded-md transition-colors ${
                    isActive('/admin/quests') 
                      ? 'bg-purple-800 text-white' 
                      : 'hover:bg-purple-800/50'
                  }`}
                >
                  <Gift size={20} />
                  <span className={`ml-3 ${!isSidebarOpen && 'md:hidden'}`}>クエスト管理</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/settings" 
                  className={`flex items-center p-3 rounded-md transition-colors ${
                    isActive('/admin/settings') 
                      ? 'bg-purple-800 text-white' 
                      : 'hover:bg-purple-800/50'
                  }`}
                >
                  <Settings size={20} />
                  <span className={`ml-3 ${!isSidebarOpen && 'md:hidden'}`}>設定</span>
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="mt-auto">
            <button className="flex items-center p-3 w-full rounded-md hover:bg-purple-800/50 transition-colors">
              <LogOut size={20} />
              <span className={`ml-3 ${!isSidebarOpen && 'md:hidden'}`}>ログアウト</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* メインコンテンツ */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        <header className="bg-purple-900 p-4 shadow-md">
          <h1 className="text-xl font-bold">{title}</h1>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
