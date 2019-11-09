
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }
      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  // 模拟服务端路由
  {
    url: '/user/menus',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          meuns: [
            {
              path: '/permission',
              component: '#',
              redirect: '/permission/page',
              alwaysShow: true, // will always show the root menu
              name: 'Permission',
              meta: {
                title: 'Permission',
                icon: 'lock',
                roles: ['admin', 'editor'] // you can set roles in root nav
              },
              children: [
                {
                  path: 'page',
                  component: '/permission/page',
                  name: '页面权限',
                  meta: {
                    title: '页面权限',
                    roles: ['admin'] // or you can only set roles in sub nav
                  }
                },
                {
                  path: 'directive',
                  component: '/permission/directive',
                  name: '指令许可',
                  meta: {
                    title: '指令许可'
                    // if do not set roles, means: this page does not require permission
                  }
                },
                {
                  path: 'role',
                  component: '/permission/role',
                  name: '角色权限',
                  meta: {
                    title: '角色权限',
                    roles: ['admin']
                  }
                }
              ]
            },

            {
              path: '/icon',
              component: '#',
              name: '图标',
              children: [
                {
                  path: 'index',
                  component: '/icons/index',
                  name: '图标',
                  meta: { title: '图标', icon: 'icon', noCache: true }
                }
              ]
            },
            {
              path: '/example',
              component: Layout,
              redirect: '/example/list',
              name: 'Example',
              meta: {
                title: 'Example',
                icon: 'example'
              },
              children: [
                {
                  path: 'create',
                  component: () => import('@/views/example/create'),
                  name: 'CreateArticle',
                  meta: { title: 'Create Article', icon: 'edit' }
                },
                {
                  path: 'edit/:id(\\d+)',
                  component: () => import('@/views/example/edit'),
                  name: 'EditArticle',
                  meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
                  hidden: true
                },
                {
                  path: 'list',
                  component: () => import('@/views/example/list'),
                  name: 'ArticleList',
                  meta: { title: 'Article List', icon: 'list' }
                }
              ]
            },

            {
              path: '/tab',
              component: Layout,
              children: [
                {
                  path: 'index',
                  component: () => import('@/views/tab/index'),
                  name: 'Tab',
                  meta: { title: 'Tab', icon: 'tab' }
                }
              ]
            },

            {
              path: '/error',
              component: Layout,
              redirect: 'noRedirect',
              name: 'ErrorPages',
              meta: {
                title: 'Error Pages',
                icon: '404'
              },
              children: [
                {
                  path: '401',
                  component: () => import('@/views/error-page/401'),
                  name: 'Page401',
                  meta: { title: '401', noCache: true }
                },
                {
                  path: '404',
                  component: () => import('@/views/error-page/404'),
                  name: 'Page404',
                  meta: { title: '404', noCache: true }
                }
              ]
            },

            {
              path: '/error-log',
              component: Layout,
              children: [
                {
                  path: 'log',
                  component: () => import('@/views/error-log/index'),
                  name: 'ErrorLog',
                  meta: { title: 'Error Log', icon: 'bug' }
                }
              ]
            },

            {
              path: '/excel',
              component: Layout,
              redirect: '/excel/export-excel',
              name: 'Excel',
              meta: {
                title: 'Excel',
                icon: 'excel'
              },
              children: [
                {
                  path: 'export-excel',
                  component: () => import('@/views/excel/export-excel'),
                  name: 'ExportExcel',
                  meta: { title: 'Export Excel' }
                },
                {
                  path: 'export-selected-excel',
                  component: () => import('@/views/excel/select-excel'),
                  name: 'SelectExcel',
                  meta: { title: 'Export Selected' }
                },
                {
                  path: 'export-merge-header',
                  component: () => import('@/views/excel/merge-header'),
                  name: 'MergeHeader',
                  meta: { title: 'Merge Header' }
                },
                {
                  path: 'upload-excel',
                  component: () => import('@/views/excel/upload-excel'),
                  name: 'UploadExcel',
                  meta: { title: 'Upload Excel' }
                }
              ]
            },

            {
              path: '/zip',
              component: Layout,
              redirect: '/zip/download',
              alwaysShow: true,
              name: 'Zip',
              meta: { title: 'Zip', icon: 'zip' },
              children: [
                {
                  path: 'download',
                  component: () => import('@/views/zip/index'),
                  name: 'ExportZip',
                  meta: { title: 'Export Zip' }
                }
              ]
            },

            {
              path: '/pdf',
              component: Layout,
              redirect: '/pdf/index',
              children: [
                {
                  path: 'index',
                  component: () => import('@/views/pdf/index'),
                  name: 'PDF',
                  meta: { title: 'PDF', icon: 'pdf' }
                }
              ]
            },
            {
              path: '/pdf/download',
              component: () => import('@/views/pdf/download'),
              hidden: true
            },

            {
              path: '/theme',
              component: Layout,
              children: [
                {
                  path: 'index',
                  component: () => import('@/views/theme/index'),
                  name: 'Theme',
                  meta: { title: 'Theme', icon: 'theme' }
                }
              ]
            },

            {
              path: '/clipboard',
              component: Layout,
              children: [
                {
                  path: 'index',
                  component: () => import('@/views/clipboard/index'),
                  name: 'ClipboardDemo',
                  meta: { title: 'Clipboard', icon: 'clipboard' }
                }
              ]
            },

            {
              path: 'external-link',
              component: Layout,
              children: [
                {
                  path: 'https://github.com/PanJiaChen/vue-element-admin',
                  meta: { title: 'External Link', icon: 'link' }
                }
              ]
            },
            /* 404页面必须放在最后一位 */
            { path: '*', redirect: '/404', hidden: true }
          ]
        }
      }
    }
  }
]
