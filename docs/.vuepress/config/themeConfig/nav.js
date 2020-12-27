// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '这个控件叫什么',
    link: '/category/%E4%BA%A4%E4%BA%92%E8%AE%BE%E8%AE%A1/%E8%BF%99%E4%B8%AA%E6%8E%A7%E4%BB%B6%E5%8F%AB%E4%BB%80%E4%B9%88/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的

    ],
  },
  {
    text: '体验碎周报',
    link: '/category/%E4%BD%93%E9%AA%8C%E7%A2%8E%E5%91%A8%E6%8A%A5/',
    items: [

    ],
  },
  {
    text: '交互设计',
    link: '/category/%E4%BA%A4%E4%BA%92%E8%AE%BE%E8%AE%A1/',
    items: [

    ],
  },
  { text: '关于我', link: '/about-me/' },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },

  {
    text: '更多',
    link: '/more/',
    items: [

      { text: '友情链接', link: '/friends/' },
    ],
  },
  


]
