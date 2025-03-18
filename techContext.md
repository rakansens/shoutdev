# 技術コンテキスト

<!-- 2025/3/17: メモリバンク初期化時に作成。既存のプロジェクト文書から情報を抽出して作成 -->

## 使用技術

TONゲームプロジェクトでは、以下の技術スタックを採用しています。

### フロントエンド

| 技術/ライブラリ | バージョン | 用途 |
|--------------|---------|------|
| Next.js | 14 | フロントエンドフレームワーク、App Routerを使用 |
| TypeScript | 最新 | 型安全なコード開発 |
| Tailwind CSS | 最新 | ユーティリティファーストのスタイリング |
| Shadcn UI | 最新 | 再利用可能なUIコンポーネント |
| Good Times フォント | - | Adobe Typekitを通じて提供される主要フォント |
| Unity WebGL | - | インタラクティブなリズムゲーム実装 |

### バックエンド

| 技術/ライブラリ | バージョン | 用途 |
|--------------|---------|------|
| Next.js API Routes | 14 | バックエンドAPI実装 |
| Supabase | 最新 | データベース、認証、ストレージ |
| PostgreSQL | - | Supabaseの基盤となるデータベース |
| Clerk Auth | 最新 | 追加の認証機能 |
| JWT | - | セキュアなトークンベースの認証 |

### 外部サービス統合

| サービス | 用途 |
|---------|------|
| Telegram OAuth | ユーザー認証 |
| Telegram Bot API | 通知と対話機能 |
| OpenAI API | ボット応答の強化 |
| Cloudflare | セキュリティとパフォーマンス最適化 |
| AWS S3 / Supabase Storage | ファイルストレージ |
| Google Analytics / PostHog | 分析とユーザー行動追跡 |
| Stripe / 暗号決済ソリューション | 支払い処理（将来的な実装） |

## 開発環境セットアップ

### 必要条件

- **Node.js**: v20.2.1
- **npm/yarn**: 最新バージョン
- **Git**: バージョン管理用

### 開発環境構築手順

1. **リポジトリのクローン**:
   ```bash
   git clone <repository-url>
   cd ton-game
   ```

2. **依存関係のインストール**:
   ```bash
   npm install
   # または
   yarn install
   ```

3. **環境変数の設定**:
   `.env.local`ファイルを作成し、以下の環境変数を設定:
   ```
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   
   # Clerk Auth
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   CLERK_SECRET_KEY=your-clerk-secret-key
   
   # Telegram
   TELEGRAM_BOT_TOKEN=your-telegram-bot-token
   TELEGRAM_API_ID=your-telegram-api-id
   TELEGRAM_API_HASH=your-telegram-api-hash
   
   # OpenAI (オプション)
   OPENAI_API_KEY=your-openai-api-key
   
   # AWS S3 (オプション)
   AWS_ACCESS_KEY_ID=your-aws-access-key
   AWS_SECRET_ACCESS_KEY=your-aws-secret-key
   AWS_REGION=us-east-1
   AWS_S3_BUCKET=your-bucket-name
   ```

4. **開発サーバーの起動**:
   ```bash
   npm run dev
   # または
   yarn dev
   ```
   開発サーバーは通常 http://localhost:3000 で起動します。

5. **Supabaseローカル開発** (オプション):
   Supabaseのローカル開発環境を使用する場合:
   ```bash
   npx supabase start
   ```

### ディレクトリ構造

```
ton-game/
├── app/                    # Next.js App Router
│   ├── api/                # API Routes
│   │   ├── quests/         # クエスト関連API
│   │   ├── daily-login/    # デイリーログイン関連API
│   │   ├── ranking/        # ランキング関連API
│   │   ├── store/          # ストア関連API
│   │   ├── users/          # ユーザー関連API
│   │   └── bot/            # Telegramボット関連API
│   ├── admin/              # 管理者ダッシュボード
│   ├── auth/               # 認証関連ページ
│   ├── quests/             # クエスト関連ページ
│   ├── daily-login/        # デイリーログイン関連ページ
│   ├── ranking/            # ランキング関連ページ
│   ├── game/               # ゲーム関連ページ
│   ├── store/              # ストア関連ページ
│   ├── settings/           # 設定関連ページ
│   ├── layout.tsx          # ルートレイアウト
│   └── page.tsx            # ホームページ
├── components/             # 再利用可能なコンポーネント
│   ├── ui/                 # UIコンポーネント
│   ├── forms/              # フォームコンポーネント
│   ├── layout/             # レイアウトコンポーネント
│   └── game/               # ゲーム関連コンポーネント
├── lib/                    # ユーティリティ関数とヘルパー
│   ├── supabase/           # Supabase関連ユーティリティ
│   ├── auth/               # 認証関連ユーティリティ
│   ├── telegram/           # Telegram関連ユーティリティ
│   └── utils/              # 一般的なユーティリティ
├── services/               # サービスレイヤー
│   ├── api.ts              # API通信サービス
│   ├── quest.ts            # クエスト関連サービス
│   ├── auth.ts             # 認証関連サービス
│   └── game.ts             # ゲーム関連サービス
├── public/                 # 静的ファイル
│   ├── game/               # ゲームアセット
│   └── images/             # 画像ファイル
├── styles/                 # グローバルスタイル
├── types/                  # TypeScript型定義
├── .env.local              # 環境変数（gitignore）
├── .gitignore              # Gitの無視ファイル設定
├── next.config.js          # Next.js設定
├── package.json            # プロジェクト依存関係
├── tailwind.config.js      # Tailwind CSS設定
└── tsconfig.json           # TypeScript設定
```

## 技術的制約

### パフォーマンス制約

1. **モバイル最適化**:
   - Telegram Mini Appとして機能するため、モバイルデバイスでの最適化が最優先
   - 初期ロード時間は2-3秒以内を目標
   - APIレスポンスは可能な限り300ms以下を目標

2. **Unity WebGL制約**:
   - モバイルデバイスでのWebGLパフォーマンスに注意
   - アセットの最適化が必要
   - 初期ロード時間の最小化が必要

3. **ネットワーク制約**:
   - モバイルネットワーク環境での動作を考慮
   - データ使用量の最適化
   - オフライン/低速接続時の対応

### セキュリティ制約

1. **認証セキュリティ**:
   - Telegram OAuth、Supabase Auth、Clerk Auth、JWTの適切な統合
   - セッション管理の安全性確保
   - CSRF/XSS対策の実装

2. **データ保護**:
   - Supabase Row Level Security (RLS)の適切な設定
   - センシティブデータの暗号化
   - ロックメカニズムによる不正アクセス防止

3. **API制約**:
   - レート制限の実装
   - 適切な認証と認可
   - 入力バリデーションの徹底

### コンプライアンス制約

1. **GDPR対応**:
   - ユーザーデータ削除リクエスト処理機能
   - プライバシーポリシーの実装
   - データ保持ポリシーの遵守

2. **アクセシビリティ**:
   - WCAG 2.1ガイドラインへの準拠
   - スクリーンリーダー対応
   - キーボードナビゲーション対応

## 依存関係

### 主要な依存関係

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "@supabase/supabase-js": "^2.0.0",
    "@clerk/nextjs": "^4.0.0",
    "jsonwebtoken": "^9.0.0",
    "axios": "^1.3.0",
    "zod": "^3.21.0",
    "date-fns": "^2.29.0",
    "react-hook-form": "^7.43.0",
    "@radix-ui/react-primitives": "^1.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/node": "^18.15.0",
    "eslint": "^8.35.0",
    "eslint-config-next": "^14.0.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "prettier": "^2.8.0",
    "prettier-plugin-tailwindcss": "^0.2.0"
  }
}
```

### 外部サービス依存関係

1. **Supabase**:
   - データベース、認証、ストレージに使用
   - サービス中断時の影響大
   - フォールバックメカニズムの検討が必要

2. **Telegram API**:
   - ユーザー認証とボット機能に使用
   - APIレート制限に注意
   - サービス中断時の代替認証手段の検討が必要

3. **Unity WebGL**:
   - ゲーム機能の中核
   - ブラウザ互換性の問題に注意
   - 代替の軽量ゲームモードの検討が必要

4. **Clerk Auth**:
   - 追加の認証機能に使用
   - サービス中断時の影響を最小限に抑えるための設計が必要

5. **OpenAI API** (オプション):
   - ボット応答の強化に使用
   - APIコスト管理が必要
   - レート制限に注意

## 開発ツールとワークフロー

### 開発ツール

- **IDE**: VSCode推奨（拡張機能: ESLint, Prettier, Tailwind CSS IntelliSense）
- **API開発/テスト**: Postman/Insomnia
- **バージョン管理**: Git/GitHub
- **CI/CD**: GitHub Actions
- **コード品質**: ESLint, Prettier
- **テスト**: Jest, React Testing Library, Cypress

### 開発ワークフロー

1. **機能開発**:
   - 機能ブランチを作成 (`feature/feature-name`)
   - 開発とローカルテスト
   - プルリクエスト作成
   - コードレビュー
   - マージ

2. **バグ修正**:
   - バグ修正ブランチを作成 (`fix/bug-description`)
   - 修正とテスト
   - プルリクエスト作成
   - コードレビュー
   - マージ

3. **リリース**:
   - リリースブランチを作成 (`release/vX.Y.Z`)
   - 最終テスト
   - 本番環境へのデプロイ
   - リリースタグの作成

4. **緊急修正**:
   - ホットフィックスブランチを作成 (`hotfix/issue-description`)
   - 修正と検証
   - 本番環境へのデプロイ
   - 開発ブランチへのバックポート

## デプロイメント

### デプロイ環境

- **開発環境**: ローカル開発サーバー
- **ステージング環境**: Vercel/Netlifyのプレビュー環境
- **本番環境**: Vercel/Netlify

### デプロイプロセス

1. **ビルドプロセス**:
   ```bash
   npm run build
   # または
   yarn build
   ```

2. **環境変数設定**:
   - 各環境に適した環境変数の設定
   - シークレットの安全な管理

3. **デプロイ**:
   ```bash
   # Vercelの場合
   vercel --prod
   
   # Netlifyの場合
   netlify deploy --prod
   ```

4. **デプロイ後の検証**:
   - 基本機能の動作確認
   - パフォーマンステスト
   - セキュリティチェック

### スケーリング戦略

- **水平スケーリング**: サーバーレスアーキテクチャによる自動スケーリング
- **CDN**: Cloudflareを使用したコンテンツ配信の最適化
- **キャッシュ戦略**: 静的アセットの効率的なキャッシュ
- **データベーススケーリング**: Supabaseの適切なプランの選択と監視

## 技術的負債と将来の拡張

### 現在の技術的負債

1. **認証システムの複雑さ**:
   - 複数の認証システム（Telegram OAuth、Supabase Auth、Clerk Auth、JWT）の統合による複雑性
   - 将来的には統合または簡素化を検討

2. **Unity WebGLの最適化**:
   - モバイルデバイスでのパフォーマンス最適化が必要
   - アセットの最適化とロード戦略の改善

3. **APIエンドポイントの整理**:
   - 増加するAPIエンドポイントの整理と標準化
   - OpenAPIスキーマの導入検討

### 将来の拡張計画

1. **高度な音楽管理システム**:
   - 音楽アセットのUI/DB統合
   - 音楽管理のための管理者インターフェース
   - 音楽メタデータの拡張

2. **拡張されたゲームプレイ機能**:
   - マルチプレイヤーモード
   - トーナメントシステム
   - カスタマイズ可能なゲームプレイ設定

3. **Web3機能の強化**:
   - NFT統合
   - ブロックチェーンベースの報酬システム
   - 分散型アイデンティティの活用

4. **分析と機械学習**:
   - ユーザー行動分析の強化
   - パーソナライズされた推奨システム
   - 不正検出メカニズム

これらの技術的側面を理解し、適切に対応することで、TONゲームプロジェクトは堅牢で拡張性のあるシステムとして成長していくことができます。
