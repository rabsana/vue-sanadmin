import uris from 'src/api/uris'
import {clearAccessToken} from 'src/helpers'
import types from './types'


export default {
  login: function ({ commit, dispatch }, payload) {
    commit(types.LOGIN_REQUEST)
    let method = 'post'
    let uri = uris.LOGIN_PATH
    let data = {
      email: payload.email,
      password: payload.password
    }

    dispatch('admin/common/apiCall', { method, uri, data }, { root: true }).then(function (result) {
      commit(types.LOGIN_SUCCESS, result.data)
    }).catch(function (error) {
      commit(types.LOGIN_FAILURE, error.response.data)
    })
  },
  logout: function ({ commit }, payload) {
    clearAccessToken()
  }
}
