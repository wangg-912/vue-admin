import request from '@/utils/request'
import qs from 'qs'
export function login(data) {
  return request({
    url: '/platform/login',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    data: qs.stringify(data)
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
