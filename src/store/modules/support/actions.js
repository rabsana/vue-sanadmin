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
  },
  [actionTypes.FIND_TICKET_BY_ID]: function({commit, dispatch}, payload){
    commit(mutationTypes.FIND_TICKET_BY_ID_REQUEST)
    let method = 'get'
    let uri = uris.TICKETS_PATH + '/' + payload.id
    let data = payload
    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri, data }, { root: true }).then(function (result) {
      commit(mutationTypes.FIND_TICKET_BY_ID_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.FIND_TICKET_BY_ID_FAILURE, error.response.data)
    })
  },
  [actionTypes.DELETE_TICKET]: function({commit, dispatch}, payload){
    commit(mutationTypes.DELETE_TICKET_REQUEST)
    let method = 'get'
    let uri = uris.TICKETS_PATH + '/' + payload.id
    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri }, { root: true }).then(function (result) {
      commit(mutationTypes.DELETE_TICKET_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.DELETE_TICKET_FAILURE, error.response.data)
    })
  },
  [actionTypes.DELETE_MESSAGE]: function({commit, dispatch}, payload){
    commit(mutationTypes.DELETE_MESSAGE_REQUEST)
    let method = 'get'
    let uri = uris.MESSAGES_PATH + '/' + payload.id
    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri }, { root: true }).then(function (result) {
      commit(mutationTypes.DELETE_MESSAGE_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.DELETE_MESSAGE_FAILURE, error.response.data)
    })
  }
}
