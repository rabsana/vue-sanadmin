import actionTypes from './action-types'
import mutationTypes from './mutation-types'
import uris from '../../../api/uris'
import commonActionTypes from '../common/action-types'

export default {
  [actionTypes.FETCH_ALL_SETTINGS]: function ({ commit, dispatch }, payload) {
    commit(mutationTypes.FETCH_SETTINGS_REQUEST)
    let method = 'get'
    let uri = uris.SETTINGS_PATH
    let data = payload
    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri, data }, { root: true }).then(function (result) {
      commit(mutationTypes.FETCH_SETTINGS_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.FETCH_SETTINGS_FAILURE, error.response.data)
    })
  },
  [actionTypes.UPDATE_ALL_SETTINGS]: function ({commit, dispatch}, payload) {
    let method = 'patch'
    let uri = uris.SETTINGS_PATH
    let data = payload
    commit(mutationTypes.UPDATE_SETTINGS_REQUEST)

    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri, data }, { root: true }).then(function (result) {
      commit(mutationTypes.UPDATE_SETTINGS_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.UPDATE_SETTINGS_FAILURE, error.response.data)
      throw error
    })
  }
}
