#!/bin/bash

# このスクリプトはNext.jsアプリケーションをポート3001で起動し、
# ngrokを使用して公開するためのものです。

# 環境変数の設定
export PORT=3001
export NEXT_PUBLIC_APP_URL="https://shoutdev.ngrok.app"

# Next.jsアプリケーションをバックグラウンドで起動
echo "Starting Next.js application on port 3001..."
npm run client &
NEXT_PID=$!

# プロセスが終了したときにNext.jsも終了させる
trap "kill $NEXT_PID" EXIT

# 少し待ってからngrokを起動
echo "Waiting for Next.js to start..."
sleep 5

# ngrokを起動（固定ドメインを使用）
echo "Starting ngrok with fixed domain shoutdev.ngrok.app..."
ngrok http 3001 --domain=shoutdev.ngrok.app

# スクリプトが終了したときにNext.jsも終了させる
kill $NEXT_PID
