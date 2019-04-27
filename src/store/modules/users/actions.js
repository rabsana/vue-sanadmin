import actionTypes from './action-types'
import mutationTypes from './mutation-types'
import uris from '../../../api/uris'
import commonActionTypes from '../common/action-types'

export default {
  [actionTypes.FETCH_USERS_LIST]: function ({ commit, dispatch }, payload) {
    commit(mutationTypes.USERS_LIST_REQUEST)
    let method = 'get'
    let uri = uris.USERS_PATH
    let data = payload
    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri, data }, { root: true }).then(function (result) {
      commit(mutationTypes.USERS_LIST_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.USERS_LIST_FAILURE, error.response.data)
    })
  },
  [actionTypes.FETCH_USER_DATA]: function ({commit, dispatch}, payload) {
    let method = 'get'
    let uri = uris.USERS_PATH + '/' + payload
    commit(mutationTypes.USER_DATA_REQUEST)

    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri }, { root: true }).then(function (result) {
      commit(mutationTypes.USER_DATA_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.USER_DATA_FAILURE, error.response.data)
    })
  },
  [actionTypes.UPDATE_USER_DATA]: function ({commit, dispatch}, payload) {
    let method = 'put'
    let uri = uris.USERS_PATH + '/' + payload.id
    let data = payload
    commit(mutationTypes.UPDATE_USER_DATA_REQUEST)
    return dispatch('sanadmin/common/'+commonActionTypes.API_CALL, {method, uri, data}, {root: true}).then(function (result) {
      commit(mutationTypes.UPDATE_USER_DATA_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.UPDATE_USER_DATA_FAILURE, error.response.data)
    })
  }
}
