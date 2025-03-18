/**
 * このファイルはスプラッシュページコンポーネントです。
 * TONゲームの起動時に表示されるスプラッシュ画面を実装しています。
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SplashPage() {
  const router = useRouter();
  
  // スプラッシュ画面を表示した後、自動的にホーム画面に遷移
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000); // 3秒後に遷移
    
    return () => clearTimeout(timer);
  }, [router]);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-deep-purple">
      <div className="relative w-full h-full">
        <Image
          src="/images/splash.jpg"
          alt="SHOUT!"
          layout="fill"
          objectFit="cover"
          priority
        />
        
        {/* ローディングインジケーター */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white animate-[loading_3s_linear]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
