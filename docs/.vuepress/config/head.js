// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: 'http://pic.ftium4.com/20201226034238.png' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '交互设计,龙爪槐守望者,这个控件叫什么,体验碎周报',
    },
  ],
  ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: 'f2276d435dcebeabb0b4e850ea3b05ae'
    }
],
  [
    'script',
    {
      
    },
    
  ], // 网站关联Google AdSense 与 html格式广告支持
]
