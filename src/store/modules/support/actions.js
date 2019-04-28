import actionTypes from './action-types'
import mutationTypes from './mutation-types'
import uris from '../../../api/uris'
import commonActionTypes from '../common/action-types'

export default {
  [actionTypes.FETCH_TICKETS_LIST]: function({commit, dispatch}, payload){
    commit(mutationTypes.FETCH_TICKETS_REQUEST)
    let method = 'get'
    let uri = uris.TICKETS_PATH
    let data = payload
    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri, data }, { root: true }).then(function (result) {
      commit(mutationTypes.FETCH_TICKETS_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.FETCH_TICKETS_FAILURE, error.response.data)
    })
  }
}
