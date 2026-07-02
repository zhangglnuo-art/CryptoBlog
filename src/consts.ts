/**
 * 全站配置中心。改站名、域名、外链地址都在这里改一处即可。
 */

// 博客正式域名。Vercel 分配域名 / 自定义域名。
// 换域名（比如以后绑定自己的域名）只改这一处即可。
export const SITE_URL = 'https://crypto-blog-phi.vercel.app';

export const SITE_TITLE = '链读 · Web3 笔记';
export const SITE_DESCRIPTION =
  '一个聚焦区块链与加密货币的学习笔记站。跨链桥、DEX、稳定币、钱包安全、DeFi 原理与链上实操经验，用大白话讲清楚，持续更新。';

// 终端头 / 侧栏用：主名、拉丁副题、一句话定位。
export const SITE_NAME = '链读';
export const SITE_LATIN = 'CHAINDU // TERMINAL';
export const SITE_TAGLINE = '一个关于区块链与加密货币的链上情报终端。';

// 侧栏「板块」分类（链到对应标签页）。
export const CATEGORIES = ['跨链', '跨链兑换', 'DEX', 'DeFi', '稳定币', '钱包安全'];

// 引流目标：AllSwap 跨链兑换。文章正文里按需在相关语境自然引用，不做全站硬广。
// 换域名或加 UTM 只需改这一处。
export const ALLSWAP_URL = 'https://allswap.io/zh-hans';
export const ALLSWAP_BRAND = 'AllSwap 跨链兑换';

// 带 UTM 参数的落地链接，便于在目标站分析里区分博客带来的流量。
// 想让某个文章内链接带追踪时用它；纯自然链接直接写 Markdown 即可。
export const allswapLink = (campaign = 'blog') =>
  `${ALLSWAP_URL}?utm_source=chaindu&utm_medium=article&utm_campaign=${campaign}`;

// 导航栏
export const NAV_LINKS = [
  { label: '首页', href: '/' },
  { label: '文章', href: '/blog' },
  { label: '关于', href: '/about' },
];

// 每页文章数（分页用）
export const POSTS_PER_PAGE = 9;
