import config from '../config'
import uris from './uris'
import { apiCall } from './api-call'

const loginApi = function (username, password) {
  let method = 'post'
  let url = config.API_URL + uris.LOGIN_PATH
  let data = {
    email: username,
    password: password
  }

  return apiCall(method, url, data)
}

export {
  loginApi
}
