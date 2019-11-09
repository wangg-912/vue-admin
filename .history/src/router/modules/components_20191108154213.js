/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: '组件管理',
  meta: {
    title: '组件',
    icon: 'component'
  },
  children: [
    {
      path: 'tinymce',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'Tinymce编辑器',
      meta: { title: 'Tinymce编辑器' }
    },
    {
      path: 'markdown',
      component: () => import('@/views/components-demo/markdown'),
      name: 'Markdown编辑器',
      meta: { title: 'Markdown编辑器' }
    },
    {
      path: 'json-editor',
      component: () => import('@/views/components-demo/json-editor'),
      name: 'JSON美化',
      meta: { title: 'JSON美化' }
    },
    {
      path: 'split-pane',
      component: () => import('@/views/components-demo/split-pane'),
      name: '拆分窗体组件',
      meta: { title: '拆分窗体' }
    },
    {
      path: 'avatar-upload',
      component: () => import('@/views/components-demo/avatar-upload'),
      name: '上传组件',
      meta: { title: '上传' }
    },
    {
      path: 'dropzone',
      component: () => import('@/views/components-demo/dropzone'),
      name: '拖放上传组件',
      meta: { title: '拖放上传' }
    },
    {
      path: 'sticky',
      component: () => import('@/views/components-demo/sticky'),
      name: '黏板组件',
      meta: { title: '黏板' }
    },
    {
      path: 'count-to',
      component: () => import('@/views/components-demo/count-to'),
      name: '数字统计组件',
      meta: { title: '数字统计' }
    },
    {
      path: 'mixin',
      component: () => import('@/views/components-demo/mixin'),
      name: '组件交互',
      meta: { title: '组件交互' }
    },
    {
      path: 'back-to-top',
      component: () => import('@/views/components-demo/back-to-top'),
      name: '回到顶部组件',
      meta: { title: '回到顶部' }
    },
    {
      path: 'drag-dialog',
      component: () => import('@/views/components-demo/drag-dialog'),
      name: '拖动对话框组件',
      meta: { title: '拖动对话框' }
    },
    {
      path: 'drag-select',
      component: () => import('@/views/components-demo/drag-select'),
      name: '拖拽选择组件',
      meta: { title: '拖拽选择' }
    },
    {
      path: 'dnd-list',
      component: () => import('@/views/components-demo/dnd-list'),
      name: 'DND组件',
      meta: { title: 'DND组件' }
    },
    {
      path: 'drag-kanban',
      component: () => import('@/views/components-demo/drag-kanban'),
      name: '拖拽看板组件',
      meta: { title: '拖拽看板' }
    }
  ]
}

export default componentsRouter
