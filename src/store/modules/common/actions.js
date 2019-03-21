import types from './types'
import actionTypes from './action-types'
import _ from 'lodash'
import { authHeader, jsonHeaders, clearAccessToken } from '../../../helpers'
import axios from 'axios'

export default {
  [actionTypes.SET_BASE_URL]: function ({commmit}, baseUrl) {
    commmit(types.SET_BASE_URL, baseUrl);
  },
  [actionTypes.SET_API_KEY]: function ({commit}, apiKey) {
    commit(types.SET_API_KEY, apiKey)
  },
  [actionTypes.API_CALL]: function ({commit, state}, { method, uri, data, headers }) {
    headers = _.merge(headers, authHeader())
    headers = _.merge(headers, jsonHeaders())
    headers = _.merge(headers, {
      'API-KEY': state.apiKey
    })
    let url = state.baseUrl + uri
    return new Promise(function (resolve, reject) {
      axios({
        method,
        url,
        data,
        headers
      }).then(function (result) {
        resolve(result)
      }).catch(function (error) {
        if (error.response.status === 403) {
          clearAccessToken()
          location.reload(true)
        }
        reject(error)
      })
    })
  }
}
