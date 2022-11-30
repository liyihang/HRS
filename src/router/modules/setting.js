import Layout from '@/layout'

export default {
  path: '/setting',
  name: 'setting',
  component: Layout,
  children: [
    {
      // 二级路由默认有Layout 还有employee页面  path设置为空
      path: '',
      component: () => import('@/views/setting'),
      meta: {
        title: '公司设置',
        icon: 'setting'
      }
    }
  ]
}
