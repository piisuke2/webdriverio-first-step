# WebdriverIO はじめの一歩
WebdriverIOを使ってテストを書く練習です。  
mocha, power-assert, ES2015でテストが書けるようにします。  

## 環境
- Windows7
- node v4.4.4
- npm 2.15.1
- IE11
- Chrome53

## テストの実行方法
コマンドプロンプトで、プロジェクトルートに移動して実行する。

	npm install
	start npm run http-server
	npm test

## Memo
### 設定ファイルを作成
	npm init
	npm i -D webdriverio
	npm i -D selenium-standalone
	npm i -D mocha
	npm i -D power-assert
	npm i -D wdio-mocha-framework
	npm i -D wdio-selenium-standalone-service
	npm i -D wdio-spec-reporter
	npm i -D babel-plugin-espower
	npm i -D babel-preset-es2015
	npm i -D babel-register
	npm i -D http-server
	npm run wdio:config

### ファイル構成
	index.html    テスト対象の画面
	move.html     index.htmlでボタンを押した時に遷移する画面
	index.spec.js index.htmlのテスト
	move.spec.js  画面遷移のテスト

### リファレンス
browserで使用できる関数 http://webdriver.io/api.html

