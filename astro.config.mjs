// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { SITE_URL } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
  // 站点根 URL —— 决定 sitemap / canonical / RSS 的绝对地址。
  // 部署到 Vercel 后，改成 Vercel 给的域名（或你自己的自定义域名）。
  site: SITE_URL,
  // 纯静态输出：build 后 dist/ 直接由 Vercel 托管，无需任何服务器 / 适配器。
  output: 'static',
  trailingSlash: 'ignore',
  // Windows 上默认可能只绑定 IPv6(::1)，导致浏览器走 IPv4(127.0.0.1) 时打不开。
  // 显式绑定到 127.0.0.1，确保 localhost 一定能访问。
  server: {
    host: '127.0.0.1',
    port: 4321,
  },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // 每篇文章输出 /blog/slug/index.html，URL 干净、对 SEO 友好。
    format: 'directory',
  },
});
