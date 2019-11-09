/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: '图表管理',
  meta: {
    title: '图表管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: '键盘图',
      meta: { title: '键盘图', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: '折线图',
      meta: { title: '折线图', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: '混合图',
      meta: { title: '混合图', noCache: true }
    }
  ]
}

export default chartsRouter
