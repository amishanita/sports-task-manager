🏃 Sports Task Manager
スポーツタスクマネージャー

A lightweight sports task management web application that helps users organize practice sessions, matches, and training schedules.

スポーツの練習・試合・トレーニング予定を管理するための シンプルなタスク管理Webアプリケーションです。

The application supports multiple languages (Japanese, English, Nepali) and demonstrates core frontend development techniques using Vanilla JavaScript.

このアプリは 日本語・英語・ネパール語の多言語対応を実装しており、Vanilla JavaScript を使用したフロントエンド開発の基本技術を示しています。

🚀 Features
主な機能
Task Management

タスク管理

Add new sports tasks
スポーツタスクの追加

Edit existing tasks
タスクの編集

Mark tasks as completed or reopen them
タスクの完了 / 再開

Delete tasks
タスクの削除

Organization & Productivity

整理・効率化

Search tasks instantly
タスクの検索

Filter tasks (All / Active / Completed)
フィルター機能（すべて / 未完了 / 完了）

Task statistics dashboard
タスク統計の表示

Internationalization

多言語対応

Japanese 🇯🇵

English 🇺🇸

Nepali 🇳🇵

Dynamic language switching is implemented through a translation object in JavaScript.

JavaScriptの 翻訳オブジェクトを利用して、動的に言語を切り替える仕組みを実装しています。

🛠 Technology Stack
技術スタック
Technology	Description
HTML5	Application structure
CSS3	Responsive UI design
JavaScript (Vanilla)	Application logic
LocalStorage API	Client-side data persistence
Font Awesome	Icon library

Frameworks such as React or Vue were intentionally not used in order to demonstrate core JavaScript skills.

React や Vue などのフレームワークは使用せず、純粋な JavaScript の理解を示すことを目的としています。

📂 Project Structure
プロジェクト構成
sports-task-manager/
│
├── index.html     # Application layout
├── style.css      # UI styling
├── script.js      # Application logic
└── README.md      # Project documentation
💾 Data Storage
データ保存

All task data is stored locally using the browser LocalStorage API.

すべてのタスクデータは ブラウザの LocalStorage API を使用して保存されます。

This allows the application to work without a backend server.

そのため、バックエンドサーバーなしでも動作可能です。

▶️ How to Run
実行方法

Clone the repository

git clone https://github.com/your-username/sports-task-manager.git

Navigate to the project folder

cd sports-task-manager

Open index.html in your browser

ブラウザで index.html を開くだけで実行できます。

No installation or server setup is required.

追加のインストールやサーバー設定は不要です。

🎯 Learning Objectives
学習目的

This project demonstrates the following frontend development concepts:

このプロジェクトでは、以下のフロントエンド技術を実装しています。

DOM manipulation

Event handling

Dynamic UI rendering

Multi-language interface design

LocalStorage data persistence
