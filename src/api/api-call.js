import axios from 'axios'
import { authHeader, jsonHeaders } from '../helpers'
import _ from 'lodash'

export function apiCall (method, url, data = {}, headers = {}) {
  headers = _.merge(headers, authHeader())
  headers = _.merge(headers, jsonHeaders())
  return new Promise(function (resolve, reject) {
    axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    }).then(function (result) {
      resolve(result)
    }).catch(function (error) {
      if (error.response.status === 403) {
        localStorage.removeItem('access_token')
        location.reload(true)
      }
      reject(error)
    })
  })
}
