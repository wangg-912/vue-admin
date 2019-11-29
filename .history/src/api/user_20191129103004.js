import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/platform/login',
    method: 'post',
    data,
    transformRequest: [function (data) {

      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'

      }
      return ret

    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'

    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getAuthMenu(token) {
  return request({
    url: '/user/menus',
    method: 'get',
    params: { token }
  })
}
