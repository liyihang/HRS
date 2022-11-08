import Layout from '@/layout'

export default {
  path: '/social',
  name: 'social',
  component: Layout,
  children: [
    {
      // 二级路由默认有Layout 还有employee页面  path设置为空
      path: '',
      component: () => import('@/views/social'),
      meta: {
        title: '社保管理',
        icon: 'table'
      }
    }
  ]
}
