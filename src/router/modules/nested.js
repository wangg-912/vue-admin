/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/nested',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
  name: '嵌套路径组件',
  meta: {
    title: '嵌套路径',
    icon: 'nested'
  },
  children: [
    {
      path: '路径1',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      name: '路径1',
      meta: { title: '路径1' },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: '路径1-1',
          component: () => import('@/views/nested/menu1/menu1-1'),
          name: '路径1-1',
          meta: { title: '路径1-1' }
        },
        {
          path: '路径1-2',
          component: () => import('@/views/nested/menu1/menu1-2'),
          name: '路径1-2',
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          meta: { title: '路径1-2' },
          children: [
            {
              path: '路径-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
              name: '路径-2-1',
              meta: { title: '路径-2-1' }
            },
            {
              path: '路径-2-2',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
              name: '路径-2-2',
              meta: { title: '路径-2-2' }
            }
          ]
        },
        {
          path: '路径-3',
          component: () => import('@/views/nested/menu1/menu1-3'),
          name: '路径-3',
          meta: { title: '路径-3' }
        }
      ]
    },
    {
      path: 'menu2',
      name: '路径2',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '路径2' }
    }
  ]
}

export default nestedRouter
