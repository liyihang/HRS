import Layout from '@/layout'

export default {
  path: '/attendances',
  name: 'attendances',
  component: Layout,
  children: [
    {
      // 二级路由默认有Layout 还有employee页面  path设置为空
      path: '',
      component: () => import('@/views/attendances'),
      meta: {
        title: '考勤'
      }
    }
  ]
}
