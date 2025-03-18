# システムパターン

<!-- 2025/3/18: プロジェクトのリファクタリングに伴い更新 -->

## システムアーキテクチャ

TONゲームは、モダンなウェブアプリケーションアーキテクチャを採用しており、クライアントサイド（Telegram Mini App）、管理者サイド、バックエンドAPI、外部サービス統合の4つの主要レイヤーで構成されています。

### 全体アーキテクチャ

```mermaid
flowchart TD
    User[ユーザー/Telegramクライアント]
    Admin[管理者]
    
    subgraph ClientSide[クライアントサイド]
        ClientApp[Next.js クライアントアプリ]
        Unity[Unity WebGLゲーム]
        ClientUI[クライアントUI コンポーネント]
    end
    
    subgraph AdminSide[管理者サイド]
        AdminApp[Next.js 管理者アプリ]
        AdminUI[管理者UI コンポーネント]
        Dashboard[ダッシュボード]
    end
    
    subgraph BackendAPI[バックエンドAPI]
        APIControllers[コントローラー]
        APIServices[サービス]
        DTOs[データ転送オブジェクト]
        Middleware[ミドルウェア]
    end
    
    subgraph Database[データベース]
        Supabase[Supabase]
        Auth[認証]
        DB[データベース]
        Storage[ストレージ]
        RLS[Row Level Security]
    end
    
    subgraph ExternalServices[外部サービス]
        TelegramAPI[Telegram API]
        OpenAI[OpenAI API]
        Storage2[AWS S3/Supabase Storage]
        Analytics[Google Analytics/PostHog]
        Payment[Stripe/暗号決済]
    end
    
    User <--> ClientSide
    Admin <--> AdminSide
    ClientSide <--> BackendAPI
    AdminSide <--> BackendAPI
    BackendAPI <--> Database
    BackendAPI <--> ExternalServices
    ClientSide <--> ExternalServices
```

### クライアントサイドアーキテクチャ

クライアントサイドはNext.js 14のApp Routerを使用し、以下のような構造になっています：

```mermaid
flowchart TD
    subgraph ClientApp[apps/client/]
        AppDir[app/]
        Components[components/]
        Hooks[hooks/]
        Lib[lib/]
        Services[services/]
        Styles[styles/]
        Types[types/]
        
        subgraph AppRoutes[app/]
            Layout[layout.tsx]
            Page[page.tsx]
            DailyLogin[daily-login/]
            Game[game/]
            Profile[profile/]
            Quests[quests/]
            Ranking[ranking/]
            Store[store/]
        end
        
        subgraph ComponentsDir[components/]
            LayoutComponents[layout/]
            QuestsComponents[quests/]
            GameComponents[game/]
            UIComponents[ui/]
        end
        
        subgraph ServicesDir[services/]
            APIService[api.ts]
            SupabaseService[supabase.ts]
            TelegramService[telegram.ts]
            TonSDKService[ton-sdk.ts]
        end
    end
    
    AppDir --> AppRoutes
    Components --> ComponentsDir
    Services --> ServicesDir
    AppRoutes --> ComponentsDir
    AppRoutes --> ServicesDir
    ComponentsDir --> ServicesDir
```

### 管理者サイドアーキテクチャ

管理者サイドもNext.js 14のApp Routerを使用し、以下のような構造になっています：

```mermaid
flowchart TD
    subgraph AdminApp[apps/admin/]
        AppDir[app/]
        Components[components/]
        Hooks[hooks/]
        Lib[lib/]
        Services[services/]
        Styles[styles/]
        Types[types/]
        
        subgraph AppRoutes[app/]
            Layout[layout.tsx]
            Page[page.tsx]
            Quests[quests/]
            Users[users/]
            Store[store/]
            Settings[settings/]
        end
        
        subgraph ComponentsDir[components/]
            LayoutComponents[layout/]
            DashboardComponents[dashboard/]
            QuestsComponents[quests/]
            UIComponents[ui/]
        end
        
        subgraph ServicesDir[services/]
            APIService[api.ts]
            SupabaseService[supabase.ts]
            AuthService[auth.ts]
        end
    end
    
    AppDir --> AppRoutes
    Components --> ComponentsDir
    Services --> ServicesDir
    AppRoutes --> ComponentsDir
    AppRoutes --> ServicesDir
    ComponentsDir --> ServicesDir
```

### バックエンドAPIアーキテクチャ

バックエンドAPIはNestJSのベストプラクティスに沿った構造を採用し、以下のような構造になっています：

```mermaid
flowchart TD
    subgraph API[api/]
        Auth[auth/]
        Quests[quests/]
        Users[users/]
        DailyLogin[daily-login/]
        Ranking[ranking/]
        Store[store/]
        Telegram[telegram/]
        Middleware[middleware/]
        Utils[utils/]
        
        subgraph AuthModule[auth/]
            AuthControllers[controllers/]
            AuthDTOs[dto/]
            AuthServices[services/]
        end
        
        subgraph QuestsModule[quests/]
            QuestsControllers[controllers/]
            QuestsDTOs[dto/]
            QuestsServices[services/]
        end
        
        subgraph UsersModule[users/]
            UsersControllers[controllers/]
            UsersDTOs[dto/]
            UsersServices[services/]
        end
    end
    
    Auth --> AuthModule
    Quests --> QuestsModule
    Users --> UsersModule
```

### データベース構造

Supabaseデータベースは以下のような主要テーブルで構成されています：

```mermaid
erDiagram
    users {
        uuid id PK
        string telegram_id
        string username
        jsonb metadata
        timestamp created_at
    }
    
    quests {
        uuid id PK
        string title
        text description
        int points
        string status
        jsonb requirements
        timestamp created_at
    }
    
    user_quests {
        uuid id PK
        uuid user_id FK
        uuid quest_id FK
        boolean completed
        timestamp completed_at
    }
    
    daily_logins {
        uuid id PK
        uuid user_id FK
        int streak
        int points
        timestamp login_at
    }
    
    game_sessions {
        uuid id PK
        uuid user_id FK
        int score
        int points_spent
        timestamp played_at
    }
    
    store_items {
        uuid id PK
        string name
        text description
        int price
        string type
        jsonb effects
        timestamp created_at
    }
    
    user_items {
        uuid id PK
        uuid user_id FK
        uuid item_id FK
        int quantity
        timestamp purchased_at
    }
    
    users ||--o{ user_quests : "completes"
    quests ||--o{ user_quests : "assigned to"
    users ||--o{ daily_logins : "logs in"
    users ||--o{ game_sessions : "plays"
    users ||--o{ user_items : "purchases"
    store_items ||--o{ user_items : "purchased as"
```

## 主要な技術的決定

### 1. Next.js 14 App Routerの採用

**決定**: フロントエンドとバックエンドの両方にNext.js 14のApp Routerを使用する。

**理由**:
- サーバーサイドレンダリング（SSR）とクライアントサイドの機能を組み合わせることで、パフォーマンスとSEOを最適化できる
- APIルートとページルートを同じプロジェクト内で管理できるため、開発効率が向上する
- App Routerは最新のReactパラダイムに準拠しており、将来的な拡張性を確保できる

**トレードオフ**:
- 従来のPages Routerと比較して学習曲線がある
- サーバーコンポーネントとクライアントコンポーネントの区別が必要

### 2. Supabaseの採用

**決定**: データベース、認証、ストレージにSupabaseを使用する。

**理由**:
- PostgreSQLベースの堅牢なデータベースを提供
- Row Level Security（RLS）による強力なセキュリティ機能
- 認証、ストレージ、リアルタイム機能などが統合されており、開発効率が向上する
- APIが使いやすく、フロントエンドとの統合が容易

**トレードオフ**:
- ベンダーロックインの可能性
- カスタマイズの制限

### 3. Unity WebGLの採用

**決定**: リズムゲームの実装にUnity WebGLを使用する。

**理由**:
- 高品質なゲーム体験を提供できる
- クロスプラットフォーム対応が容易
- 豊富なアセットとツールが利用可能
- WebGLによりブラウザ内で直接実行可能

**トレードオフ**:
- 初期ロード時間が長くなる可能性
- モバイルデバイスでのパフォーマンス最適化が必要

### 4. 複数の認証メカニズムの統合

**決定**: Telegram OAuth、Supabase Auth、Clerk Auth、JWTを組み合わせて使用する。

**理由**:
- Telegram OAuthによりTelegramユーザーのシームレスな認証が可能
- Supabase Authによりデータベースとの統合が容易
- Clerk Authにより追加の認証機能を提供
- JWTによりセキュアなセッション管理が可能

**トレードオフ**:
- 複数の認証システムの管理が複雑になる
- 認証フローの整合性を維持する必要がある

## デザインパターン

### 1. コンポーネントベースアーキテクチャ

フロントエンドは再利用可能なコンポーネントを中心に構築されています。各コンポーネントは特定の機能を担当し、プロパティを通じてデータを受け取ります。これにより、コードの再利用性と保守性が向上します。

```typescript
// 例: クエストコンポーネント
interface QuestProps {
  id: string;
  title: string;
  description: string;
  points: number;
  completed: boolean;
  onComplete: (id: string) => void;
}

const Quest: React.FC<QuestProps> = ({ 
  id, title, description, points, completed, onComplete 
}) => {
  // コンポーネントの実装
};
```

### 2. サービスレイヤーパターン

APIとの通信は専用のサービスレイヤーを通じて行われます。これにより、ビジネスロジックとデータアクセスが分離され、コードの保守性と再利用性が向上します。

```typescript
// 例: クエストサービス
export const questService = {
  getQuests: async () => {
    const response = await fetch('/api/quests');
    return response.json();
  },
  
  completeQuest: async (questId: string) => {
    const response = await fetch(`/api/quests/${questId}/complete`, {
      method: 'POST',
    });
    return response.json();
  },
  
  // その他のメソッド
};
```

### 3. リポジトリパターン

データベースアクセスはリポジトリパターンを使用して抽象化されています。これにより、データアクセスロジックが集中管理され、一貫性のあるデータ操作が可能になります。

```typescript
// 例: クエストリポジトリ
export const questRepository = {
  findAll: async () => {
    const { data, error } = await supabase
      .from('quests')
      .select('*')
      .eq('status', 'published');
    
    if (error) throw error;
    return data;
  },
  
  findById: async (id: string) => {
    const { data, error } = await supabase
      .from('quests')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },
  
  // その他のメソッド
};
```

### 4. ステートマネジメント

ローカルコンポーネント状態とグローバル状態を組み合わせて使用しています。ローカル状態はReactの`useState`フックで管理し、グローバル状態はReactのContext APIを使用して管理します。

```typescript
// 例: ユーザーコンテキスト
export const UserContext = createContext<{
  user: User | null;
  loading: boolean;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => Promise<void>;
}>({
  user: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // コンテキストプロバイダーの実装
};
```

### 5. ミドルウェアパターン

APIルートでは、認証、エラーハンドリング、ロギングなどの共通機能をミドルウェアとして実装しています。これにより、横断的関心事が分離され、コードの重複が減少します。

```typescript
// 例: 認証ミドルウェア
export const withAuth = (handler: NextApiHandler): NextApiHandler => {
  return async (req, res) => {
    try {
      // トークンの検証
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      // ユーザーの検証
      const user = await verifyToken(token);
      if (!user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      // リクエストにユーザー情報を追加
      req.user = user;
      
      // 元のハンドラーを呼び出す
      return handler(req, res);
    } catch (error) {
      console.error('Auth error:', error);
      return res.status(401).json({ error: 'Unauthorized' });
    }
  };
};
```

## コンポーネント間の関係

### フロントエンドとバックエンドの連携

フロントエンドコンポーネントはサービスレイヤーを通じてバックエンドAPIと通信します。APIレスポンスはフロントエンドの状態に反映され、UIが更新されます。

```mermaid
sequenceDiagram
    participant User
    participant UI as UIコンポーネント
    participant Service as サービスレイヤー
    participant API as APIルート
    participant DB as Supabaseデータベース
    
    User->>UI: アクション実行
    UI->>Service: サービスメソッド呼び出し
    Service->>API: APIリクエスト
    API->>DB: データベースクエリ
    DB-->>API: クエリ結果
    API-->>Service: APIレスポンス
    Service-->>UI: データ更新
    UI-->>User: UI更新
```

### 認証フロー

ユーザー認証は複数のシステムを連携させて実現しています。

```mermaid
sequenceDiagram
    participant User
    participant App as Next.jsアプリ
    participant TelegramOAuth as Telegram OAuth
    participant SupabaseAuth as Supabase Auth
    participant ClerkAuth as Clerk Auth
    participant JWT as JWTサービス
    
    User->>App: ログイン要求
    App->>TelegramOAuth: リダイレクト
    User->>TelegramOAuth: 認証
    TelegramOAuth-->>App: 認証コード
    App->>SupabaseAuth: ユーザー検証/作成
    SupabaseAuth-->>App: ユーザーデータ
    App->>ClerkAuth: セッション作成
    ClerkAuth-->>App: セッションデータ
    App->>JWT: トークン生成
    JWT-->>App: JWTトークン
    App-->>User: 認証完了
```

### クエスト完了フロー

ユーザーがクエストを完了する際のデータフローです。

```mermaid
sequenceDiagram
    participant User
    participant QuestUI as クエストUI
    participant QuestService as クエストサービス
    participant QuestAPI as クエストAPI
    participant DB as データベース
    participant TelegramBot as Telegramボット
    
    User->>QuestUI: クエスト完了アクション
    QuestUI->>QuestService: completeQuest(questId)
    QuestService->>QuestAPI: POST /api/quests/{id}/complete
    QuestAPI->>DB: クエスト状態更新
    QuestAPI->>DB: ユーザーポイント更新
    DB-->>QuestAPI: 更新結果
    QuestAPI->>TelegramBot: 通知送信
    TelegramBot-->>User: Telegram通知
    QuestAPI-->>QuestService: 成功レスポンス
    QuestService-->>QuestUI: UI更新
    QuestUI-->>User: 完了フィードバック表示
```

### ゲームプレイフロー

ユーザーがリズムゲームをプレイする際のデータフローです。

```mermaid
sequenceDiagram
    participant User
    participant GameUI as ゲームUI
    participant Unity as Unity WebGL
    participant GameService as ゲームサービス
    participant GameAPI as ゲームAPI
    participant DB as データベース
    
    User->>GameUI: プレイボタンクリック
    GameUI->>GameService: ポイント消費確認
    GameService->>GameAPI: POST /api/game/start
    GameAPI->>DB: ポイント消費記録
    DB-->>GameAPI: 消費結果
    GameAPI-->>GameService: 開始確認
    GameService-->>GameUI: ゲーム開始許可
    GameUI->>Unity: ゲーム初期化
    Unity-->>User: ゲームプレイ
    User->>Unity: ゲームプレイ
    Unity->>GameService: スコア送信
    GameService->>GameAPI: POST /api/game/score
    GameAPI->>DB: スコア保存
    DB-->>GameAPI: 保存結果
    GameAPI-->>GameService: 成功レスポンス
    GameService-->>Unity: スコア確認
    Unity-->>User: 結果表示
```

これらのシステムパターンと設計決定により、TONゲームは拡張性が高く、保守性に優れたアーキテクチャを実現しています。
