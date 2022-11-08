import Layout from '@/layout'

export default {
  path: '/departments',
  name: 'departments',
  component: Layout,
  children: [
    {
      // 二级路由默认有Layout 还有employee页面  path设置为空
      path: '',
      component: () => import('@/views/departments'),
      meta: {
        title: '部门管理',
        icon: 'tree'
      }
    }
  ]
}
