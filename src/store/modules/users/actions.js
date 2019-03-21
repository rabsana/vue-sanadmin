import actionTypes from './action-types'
import mutationTypes from './mutation-types'
import uris from '../../../api/uris'
import commonActionTypes from '../common/action-types'

export default {
  [actionTypes.FETCH_USERS_LIST]: function ({ commit, dispatch }, payload) {
    commit(mutationTypes.USERS_LIST_REQUEST)
    let method = 'get'
    let uri = uris.USERS_PATH
    dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri }, { root: true }).then(function (result) {
      commit(mutationTypes.USERS_LIST_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.USERS_LIST_FAILURE, error.response.data)
    })
  }
}
