# vite-vue3-crx
## 克隆到本地
```shell
npx degit Bald-Guy/vite-vue3-crx my-webext
cd my-webext
pnpm i
```

## 开发
```shell
pnpm dev
```
```shell
pnpm start:chromium
```

## 打包
```shell
pnpm build
```

crx 工具可能已经有一段时间没有更新了。不过，打包为 .crx 文件的需求仍然存在，尤其是为了在 Chrome 或基于 Chromium 的浏览器上分发扩展。

谷歌官方推荐使用 Chrome 浏览器本身来打包 CRX 文件。以下是步骤：

打开 Chrome 浏览器。
点击菜单 -> 更多工具 -> 扩展程序，或者在地址栏中输入 chrome://extensions/ 并按 Enter。
开启右上角的“开发者模式”。
点击“加载已解压的扩展程序”并选择你的扩展程序目录。
加载完成后，你的扩展程序会显示在列表中。找到它，并点击“打包扩展程序”按钮。
选择根目录和私钥文件（如果是首次打包，可以不选择私钥文件，Chrome 会为你生成一个新的私钥文件）。点击打包后，Chrome 会为你生成 .crx 文件和 .pem 私钥文件。
需要注意的是，这种方式打包的 .crx 文件主要用于非 Chrome Web Store 的分发。如果你打算在 Chrome Web Store 上发布扩展程序，你只需要上传已解压的扩展程序目录，Google 会在发布时自动为你打包成 .crx 格式。


## TODO
- [ ] 实现响应式 localStorage
