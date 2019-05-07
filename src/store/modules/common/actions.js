import types from './types'
import actionTypes from './action-types'
import _ from 'lodash'
import { authHeader, jsonHeaders, clearAccessToken } from '../../../helpers'
import axios from 'axios'

export default {
  [actionTypes.SET_BASE_URL]: function ({ commit }, baseUrl) {
    commit(types.SET_BASE_URL, baseUrl)
  },
  [actionTypes.SET_API_KEY]: function ({ commit }, apiKey) {
    commit(types.SET_API_KEY, apiKey)
  },
  [actionTypes.API_CALL]: function ({ commit, state }, { method, uri, data, headers }) {
    headers = _.merge(headers, authHeader())
    headers = _.merge(headers, jsonHeaders())
    headers = _.merge(headers, {
      'API-KEY': state.apiKey
    })
    let hasFileUpload = _.find(data, function (o) {
      return o instanceof File
    }) !== undefined
    if(hasFileUpload){
      headers = _.merge(headers, {
        'Content-Type': 'multipart/form-data'
      })
      let formData = new FormData()
      _.forEach(data, function (o, i) {
        formData.append(i, o)
      })
      data = formData
    }
    let url = state.baseUrl + uri
    let axiosConfig = {
      method,
      url,
      headers
    }
    let applicableDataMethods = ['post', 'put', 'patch']
    if (_.indexOf(applicableDataMethods, _.lowerCase(method)) > -1) {
      axiosConfig['data'] = data
    } else {
      axiosConfig['params'] = data
    }

    return new Promise(function (resolve, reject) {
      axios(axiosConfig).then(function (result) {
        resolve(result)
      }).catch(function (error) {
        if (error.response.status === 401) {
          clearAccessToken()
          location.reload(true)
        }
        reject(error)
        throw error
      })
    })
  }
}
