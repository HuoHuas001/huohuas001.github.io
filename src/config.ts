import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "HuoHuas001 's Blog",
	subtitle: "欢迎来到HuoHuas001 的博客，这里是我记录一些学习笔记和经验分享的地方。",
	lang: "zh_CN", // 语言代码，例如 'en', 'zh_CN', 'ja' 等
	themeColor: {
		hue: 250, // 主题颜色的默认色相，范围从 0 到 360。例如红色: 0, 青绿色: 200, 青色: 250, 粉色: 345
		fixed: false, // 隐藏访客的主题颜色选择器
	},
	banner: {
		enable: true,
		src: "assets/images/demo-banner.png", // 相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
		position: "center", // 等效于 object-position，仅支持 'top', 'center', 'bottom'。默认为 'center'
		credit: {
			enable: true, // 显示横幅图片的署名文本
			text: "HuoHuas001", // 要显示的署名文本
			url: "", // (可选) 指向原始艺术品或艺术家页面的链接
		},
	},
	toc: {
		enable: true, // 在帖子右侧显示目录
		depth: 2, // 在表格中显示的最大标题深度，从 1 到 3
	},
	favicon: [
		// 将此数组留空以使用默认网站图标
		{
			src: '/favicon/favicon.png',    // 网站图标的路径，相对于 /public 目录
		}
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/HuoHuas001", // 内部链接不应包含基础路径，因为它会自动添加
			external: true, // 显示外部链接图标并将在新标签页中打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.jpg", // 相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
	name: "HuoHuas001",
	bio: "心若向阳，无畏风雨；步履不停，终见彩虹。",
	links: [
		{
			name: "BiliBili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/386293577",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/HuoHuas001",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景色）被覆盖了，请参见 astro.config.mjs 文件。
	// 请选择深色主题，因为此博客主题当前仅支持深色背景
	theme: "github-dark",
};