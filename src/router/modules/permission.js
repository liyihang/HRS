import Layout from '@/layout'

export default {
  path: '/permission',
  name: 'permission',
  component: Layout,
  children: [
    {
      // 二级路由默认有Layout 还有employee页面  path设置为空
      path: '',
      component: () => import('@/views/permission'),
      meta: {
        title: '权限'
      }
    }
  ]
}
