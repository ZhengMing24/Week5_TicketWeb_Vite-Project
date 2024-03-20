# GlassWeb
## GitHub Pages :
- 以Vite環境開發眼鏡官網
## Node.js 版本
  - 專案的 Node.js 版本需為 v16 以上
  - 查看自己版本指令：`node -v`
## 指令列表
- `npm create vite@latest` - 可以建置vite環境
- `cd vite-project` - 切換到vite專案目錄下
- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm run deploy` - 自動化部署

## 資料夾結構
- .vscode : vscode 設定檔，依據不同專案自動產生的資料夾
- node_modules : 專案中使用的延伸套件。當資源共享時，只需執行npm install 即可得到所需套件，不需特地傳送
- public : 公開檔案。置放不需被編譯和打包檔案 ，例 : 圖片、SVG ，故不能放需被JavaScript 引用的檔案
- src : 主要開發資料夾
- App.vue : 為整個網頁的根元件
- main.js : 主要檔案，所有檔案的進入點，全部檔案皆會在此創建Vue並掛載到DOM
- .gitignore : git版控下，要排除的檔案，例 : node_modules

### 注意事項
- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore
- 內含gh-pages套件 `npm install -g gh-pages` `npm install gh-pages --save-dev` 
- 內含 ejs套件 `npm install ejs`
- 若dist內缺少html檔案可執行`npm run copy-html`

## 開發模式的監聽
vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能

## 部署 Github-pages 流程說明
### Windows 版本
1. 在 GitHub 建立一個新的 Repository

2. 部署前請務必先將原始碼上傳到 GitHub Repository 也就是初始化 GitHub，因此通常第一步驟會在專案終端機輸入以下指令
```cmd
git init # 若已經初始化過就可以不用輸入
git add . 將當前目錄的內容添加進緩存區
git commit -m 'first commit' 將緩存區的內容提交到Git倉庫
git branch -M master 將當前的分支重新命名為 master
git remote add origin [GitHub Repositories Url] 與Github上的Repositories連接
git push -u origin master // 推送至Github該連接的master分支，往後只需要輸入 git push
```

3. 初始化完畢後，執行 `npm run deploy` 指令進行自動化部署