import actionTypes from './action-types'
import mutationTypes from './mutation-types'
import uris from '../../../api/uris'
import commonActionTypes from '../common/action-types'

export default {
  [actionTypes.GET_ALL_CERTIFICATES]: function({commit, dispatch}, payload){
    commit(mutationTypes.GET_CERTIFICATES_REQUEST)
    let method = 'get'
    let uri = uris.CERTIFICATES_PATH
    let data = payload
    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri, data }, { root: true }).then(function (result) {
      commit(mutationTypes.GET_CERTIFICATES_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.GET_CERTIFICATES_FAILURE, error.response.data)
    })
  },
  [actionTypes.GET_USER_CERTIFICATES]: function({commit, dispatch}, payload){
    commit(mutationTypes.GET_USER_CERTIFICATES_REQUEST)
    let method = 'get'
    let uri = uris.USER_CERTIFICATES_PATH + '/' + payload
    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri }, { root: true }).then(function (result) {
      commit(mutationTypes.GET_USER_CERTIFICATES_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.GET_USER_CERTIFICATES_FAILURE, error.response.data)
    })
  },
  [actionTypes.UPDATE_CERTIFICATE]: function({commit, dispatch}, payload){
    commit(mutationTypes.UPDATE_CERTIFICATE_REQUEST)
    let method = 'patch'
    let uri = uris.CERTIFICATES_PATH + '/' + payload['certificate_id']
    let data = payload
    delete data['certificate_id']
    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri, data }, { root: true }).then(function (result) {
      commit(mutationTypes.UPDATE_CERTIFICATE_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.UPDATE_CERTIFICATE_FAILURE, error.response.data)
    })
  },
}
