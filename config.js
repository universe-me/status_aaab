// 配置
window.Config = {

  // 站点名
  SiteName: 'Aaab.online 服务状态',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm787151637-f5ad2cfb713853c3c96cd254',
    'm787151641-ce1220f2f66155424233b319',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,
  
  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://status.org.cn/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/yb/uptime-status'
    }
  ]
};
