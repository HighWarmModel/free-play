export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: '免费抓娃娃',
  /**
   * @description Cookie中储存的键名
   */
  cookieTokenName: 'token',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'http://dev.hahaipi.com/wxxcx/index.php', // /wxxcx/index.php/
    pro: ''
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
  /**
   * @description 初始页为登录页
   */
  initialPageName: 'login',
  /**
   * @description 一些不用登陆的页面
   */
  notLoginPageName: ['login'],
  /**
   * @description 路由localStorage名字
   */
  routerStorage: 'routers',
  /**
   * @description 打开的窗口缓存
   */
  tabNavStorage: 'tabNavList',
  /**
   * @description 需要加载的插件
   */
  plugins: {
    'tips': {
      isOff: true // 是否开启
    }
  }
}
