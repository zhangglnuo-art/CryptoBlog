# 链读 · Web3 笔记

一个聚焦区块链与加密货币的科普博客。技术栈 **Astro 5 + Tailwind v4**，纯静态输出，部署到 **Vercel**。定位是为跨链兑换平台 **[AllSwap](https://allswap.io/zh-hans)** 引流的 SEO 内容站。

## 快速开始

```bash
pnpm install       # 安装依赖（也可用 npm install）
pnpm dev           # 本地开发 http://localhost:4321
pnpm build         # 构建到 dist/（纯静态）
pnpm preview       # 本地预览构建产物
```

> Windows 上已在 `astro.config.mjs` 里把 dev server 绑定到 `127.0.0.1`，避免 localhost 走 IPv6 打不开的问题。

## 目录结构

```
src/
  consts.ts              ← 全站配置：域名、站名、外链地址（改这一处即可）
  content.config.ts      ← 文章 frontmatter 校验规则
  content/blog/*.md(x)   ← 文章正文（← 你日常只动这里）
  components/            ← Header / Footer / PostCard / BaseHead(SEO)
  layouts/              ← BaseLayout(全站) / PostLayout(文章页)
  pages/                ← 首页 / blog 列表 / [slug] 详情 / tags / rss / robots
  styles/global.css      ← 设计令牌与杂志编辑风主题（纸张 / 墨 / 朱红）
public/                 ← favicon、封面图等静态资源
scripts/new-post.mjs    ← 一键新建草稿
```

## 部署到 Vercel（首次）

1. 打开 <https://vercel.com/new>，用 GitHub 登录
2. 选择并导入本仓库 `zhangglnuo-art/CryptoBlog`
3. Vercel 会自动识别为 **Astro** 项目，Build Command / Output（`dist`）都会自动填好，**直接点 Deploy 即可**，无需任何服务器或适配器
4. 部署完成后 Vercel 会给一个 `xxx.vercel.app` 域名

### 上线后必改一处

拿到 Vercel 域名后，把 `src/consts.ts` 里的 `SITE_URL` 改成你的正式域名（Vercel 域名或自定义域名），否则 sitemap / canonical / RSS 里的绝对地址会不对。改完 push，Vercel 会自动重新部署。

> 之后每次往 GitHub `main` 分支推送，Vercel 都会**自动重新构建并上线**，无需手动操作。

## 写一篇新文章

```bash
SLUG=cross-chain-guide pnpm new "跨链兑换教程" "跨链,跨链兑换"
```

会在 `src/content/blog/` 生成草稿（`draft: true`）。编辑完成后把 `draft` 改成 `false` 即发布。

### frontmatter 字段

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | ✅ | ≤70 字符，含主关键词 |
| `description` | ✅ | 20–160 字，搜索结果描述，影响点击率 |
| `pubDate` | ✅ | 发布日期 |
| `updatedDate` |  | 更新日期（更新老文有利 SEO） |
| `tags` |  | 第一个是主关键词，自动生成标签页 |
| `cover` |  | 封面图路径，如 `/covers/xxx.jpg`；仅在文章页顶部显示，列表为纯文字编号索引 |
| `featured` |  | `true` 置顶到首页精选位 |
| `draft` |  | `true` 时不进生产构建 |

## 关于外链（引流）

本站定位是**正常、可信的加密货币科普博客**，全站导航、首页、页脚都不放广告位。外链只在文章正文里、
**在相关语境中自然出现**，直接写 Markdown 链接即可：

```md
想在不同链之间换币，可以用 [AllSwap 跨链兑换](https://allswap.io/zh-hans)。
```

原则：

- **不是每篇都要放**。像《比特币和以太坊的区别》这类纯科普文就没有外链，这样整站才可信、才自然。
- 只在「跨链 / 兑换 / 换币 / 低 Gas 链」这类真正相关的语境里带一句，别硬塞。
- 一篇文章最多一个外链，读感优先。
- 想追踪某个链接带来的流量，用 `consts.ts` 里的 `allswapLink()` 生成带 UTM 的地址；纯自然链接可不带。

> SEO 说明：博客用独立域名，作为外部站点链向目标站，属于站外反向链接，权重高于同域子目录。

## SEO 已内置

- ✅ 每页 canonical / OG / Twitter 卡片（`BaseHead.astro`）
- ✅ 文章页 `BlogPosting` + `BreadcrumbList` 结构化数据（JSON-LD）
- ✅ 自动 `sitemap-index.xml`、`rss.xml`、`robots.txt`
- ✅ 干净 URL（`/blog/slug/`）、语义化 HTML、零多余 JS（Core Web Vitals 友好）
- ✅ 文章之间大量内链，提升站内权重与停留时长

## 运营建议

1. **选题围绕真实搜索意图**：`跨链桥是什么`、`跨链兑换教程`、`USDT 和 USDC 区别` 这类问题，既有搜索量又精准。
2. **内容为主，链接为辅**：先把文章写得真有用，外链是顺带的，不是目的。
3. **文章互链**：新文章链到相关旧文（种子文章里已大量示范）。
4. **持续更新**：每周 1–2 篇，老文定期更新 `updatedDate`。
5. **提交搜索引擎**：上线后把 `sitemap-index.xml` 提交到 Google Search Console / Bing。

## 网页发文（可选）

如果不想动代码，也能在浏览器里写文章发布，见 [CMS-SETUP.md](./CMS-SETUP.md)。
