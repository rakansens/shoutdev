#!/bin/bash

# このスクリプトはTelegram Botのコマンドメニューを設定します

# .envファイルから環境変数を読み込む
if [ -f packages/client/.env ]; then
  export $(grep -v '^#' packages/client/.env | xargs)
fi

# Telegram Botトークンを環境変数から取得
BOT_TOKEN=${TELEGRAM_BOT_TOKEN}

if [ -z "$BOT_TOKEN" ]; then
  echo "Error: TELEGRAM_BOT_TOKEN environment variable is not set"
  exit 1
fi

echo "Using Bot Token: ${BOT_TOKEN}"

# コマンドメニューを設定
echo "Setting up bot commands..."
curl -X POST "https://api.telegram.org/bot${BOT_TOKEN}/setMyCommands" \
  -H "Content-Type: application/json" \
  -d '{
    "commands": [
      {
        "command": "start",
        "description": "ボットを開始"
      },
      {
        "command": "app",
        "description": "TONゲームを起動"
      },
      {
        "command": "help",
        "description": "ヘルプを表示"
      }
    ]
  }'

echo -e "\nDone!"
