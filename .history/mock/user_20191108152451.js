
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
              path: '/权限管理',
              component: '#',
              redirect: '/permission/page',
              alwaysShow: true, // will always show the root menu
              name: '权限管理',
              meta: {
                title: '权限管理',
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
              component: '#',
              redirect: '/example/list',
              name: '示例管理',
              meta: {
                title: '示例管理',
                icon: 'example'
              },
              children: [
                {
                  path: 'create',
                  component: '/example/create',
                  name: '创建文章',
                  meta: { title: '创建文章', icon: 'edit' }
                },
                {
                  path: 'edit/:id(\\d+)',
                  component: '/example/edit',
                  name: '文章编辑',
                  meta: { title: '文章编辑', noCache: true, activeMenu: '/example/list' },
                  hidden: true
                },
                {
                  path: 'list',
                  component: '/example/list',
                  name: '文章列表',
                  meta: { title: '文章列表', icon: 'list' }
                }
              ]
            },

            {
              path: '/tab',
              component: '#',
              name: '选项卡',
              children: [
                {
                  path: 'index',
                  component: '/tab/index',
                  name: '选项卡',
                  meta: { title: '选项卡', icon: 'tab' }
                }
              ]
            },

            {
              path: '/error',
              component: '#',
              redirect: 'noRedirect',
              name: '错误页面',
              meta: {
                title: '错误页面',
                icon: '404'
              },
              children: [
                {
                  path: '401',
                  component: '/error-page/401',
                  name: '401页面',
                  meta: { title: '401页面', noCache: true }
                },
                {
                  path: '404',
                  component: '/error-page/404',
                  name: '404页面',
                  meta: { title: '404页面', noCache: true }
                }
              ]
            },

            {
              path: '/error-log',
              component: '#',
              name: '错误日志',
              children: [
                {
                  path: 'log',
                  component: '/error-log/index',
                  name: '错误日志',
                  meta: { title: '错误日志', icon: 'bug' }
                }
              ]
            },

            {
              path: '/excel',
              component: '#',
              redirect: '/excel/export-excel',
              name: 'Excel',
              meta: {
                title: 'Excel',
                icon: 'excel'
              },
              children: [
                {
                  path: 'export-excel',
                  component: '/excel/export-excel',
                  name: 'Excel导出',
                  meta: { title: 'Excel导出' }
                },
                {
                  path: 'export-selected-excel',
                  component: '/excel/select-excel',
                  name: '选择导出',
                  meta: { title: '选择导出' }
                },
                {
                  path: 'export-merge-header',
                  component: '/excel/merge-header',
                  name: '合并头部',
                  meta: { title: '合并头部' }
                },
                {
                  path: 'upload-excel',
                  component: '/excel/upload-excel',
                  name: '导入Excel',
                  meta: { title: '导入Excel' }
                }
              ]
            },

            {
              path: '/zip',
              component: '#',
              redirect: '/zip/download',
              alwaysShow: true,
              name: 'Zip',
              meta: { title: 'Zip', icon: 'zip' },
              children: [
                {
                  path: 'download',
                  component: '/zip/index',
                  name: '导出压缩',
                  meta: { title: '导出压缩' }
                }
              ]
            },

            {
              path: '/pdf',
              component: '#',
              redirect: '/pdf/index',
              children: [
                {
                  path: 'index',
                  component: '/pdf/index',
                  name: 'PDF',
                  meta: { title: 'PDF', icon: 'pdf' }
                }
              ]
            },
            {
              path: '/pdf/download',
              component: '/pdf/download',
              hidden: true
            },

            {
              path: '/theme',
              component: '#',
              children: [
                {
                  path: 'index',
                  component: '/theme/index',
                  name: '主题',
                  meta: { title: '主题', icon: 'theme' }
                }
              ]
            },

            {
              path: '/clipboard',
              component: '#',
              children: [
                {
                  path: 'index',
                  component: '/clipboard/index',
                  name: '剪切板',
                  meta: { title: '剪切板', icon: 'clipboard' }
                }
              ]
            },

            {
              path: 'external-link',
              component: '#',
              children: [
                {
                  path: 'https://www.baidu.com',
                  meta: { title: '外部链接', icon: 'link' }
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
