module.exports = {
  title: 'zxk\'s book',
  description: '兴趣使然的备忘库',
  head: [
    ['link', { rel: 'icon', href: '/Avatar.jpg' }],
  ],
  base: '/books/',
  plugins: [
    "vuepress-plugin-auto-sidebar", {
        titleMode: "default",
    },
    'permalink-pinyin',
  	'@vuepress/back-to-top',
    '@vuepress/medium-zoom', // 缩放图片
  	'@vuepress/nprogress',	// 加载进度条
  	'vuepress-plugin-smooth-scroll',	// 平滑滚动
    ['vuepress-plugin-mathjax', {target: 'svg', macros: {'*': '\\times', },},],	// 添加 mathjax 支持
  	['@vuepress/active-header-links', {sidebarLinkSelector: '.sidebar-link', headerAnchorSelector: '.header-anchor'}]	// 侧边栏滚动
  ],
  theme: 'antdocs',
  themeConfig: {
    author: 'zxk',
    logo: "/Avatar.jpg",
    authorAvatar: "/Avatar.jpg",
    // github
    repo: 'https://github.com/Rianico/books',
    // 导航栏
    nav: [
      { text: '大数据', items: [
        {text: 'Spark', link: '/da-shu-ju/Spark/'},
        {text: 'Kafka', link: '/da-shu-ju/Kafka/'},
        {text: 'Hadoop', link: '/da-shu-ju/Hadoop/'},
        {text: 'Hive', link: '/da-shu-ju/Hive/'},
        {text: '其他', link: '/da-shu-ju/qi-ta/'},
      ]},
      { text: '编程语言', items: [
        {text: 'Java', link: '/bian-cheng-yu-yan/Java/'},
        {text: 'JVM', link: '/bian-cheng-yu-yan/JVM/'},
        {text: 'Scala', link: '/bian-cheng-yu-yan/Scala/'},
        {text: 'Bash', link: '/bian-cheng-yu-yan/Bash/'},
        {text: 'Python', link: '/bian-cheng-yu-yan/Python/'},
      ]},
      { text: '编程基础', items: [
        {text: '设计模式', link: '/bian-cheng-ji-chu/she-ji-mo-shi/'},
        {text: '数据库', link: '/bian-cheng-ji-chu/shu-ju-ku/'},
        {text: '算法', link: '/bian-cheng-ji-chu/suan-fa/'},
        {text: '网络', link: '/bian-cheng-ji-chu/wang-luo/'},
      ]},
      { text: '专栏学习', items: [
        {text: 'Java并发编程实战', link: '/zhuan-lan-xue-xi/Java-bing-fa-bian-cheng-shi-zhan/'},
        {text: '计算机组成原理', link: '/zhuan-lan-xue-xi/ji-suan-ji-zu-cheng-yuan-li/'},
        {text: '设计模式之美', link: '/zhuan-lan-xue-xi/she-ji-mo-shi-zhi-mei/'},
        {text: '数据结构与算法', link: '/zhuan-lan-xue-xi/shu-ju-jie-gou-yu-suan-fa/'},
        {text: 'Spark性能调优实战', link: '/zhuan-lan-xue-xi/spark-xing-neng-diao-you-shi-zhan/'},
      ]},
      { text: 'Linux', items: [
        {text: '原理篇', link: '/Linux/yuan-li-pian/'},
        {text: '运维工具', link: '/Linux/yun-wei-gong-ju/'},
        {text: '常用命令', link: '/Linux/chang-yong-ming-ling/'},
      ]},
      { text: '软件', link: '/ruan-jian/' },
      { text: 'Home', link: '/' }
    ],
    sidebar: [],
    // 侧边栏
    sidebarDepth: 3,
    displayAllHeaders: false,
    activeHeaderLinks: false,
    // 搜索框
    search: true,
    searchMaxSuggestions: 10,
    // 更新时间
    lastUpdated: 'Last Updated',
     // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    // 页面滚动
    smoothScroll: true,
  },
	markdown: {
		  // 开启代码行号
	  lineNumbers: true
	}
}
