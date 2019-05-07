import actionTypes from './action-types'
import mutationTypes from './mutation-types'
import uris from '../../../api/uris'
import commonActionTypes from '../common/action-types'

export default {
  [actionTypes.GET_SELL_GATEWAYS]: function({commit, dispatch}, payload){
    commit(mutationTypes.GET_SELL_GATEWAYS_REQUEST)
    let method = 'get'
    let uri = uris.SELL_GATEWAYS_PATH
    let data = payload
    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri, data }, { root: true }).then(function (result) {
      commit(mutationTypes.GET_SELL_GATEWAYS_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.GET_SELL_GATEWAYS_FAILURE, error.response.data)
    })
  },
  [actionTypes.GET_BUY_GATEWAYS]: function({commit, dispatch}, payload){
    commit(mutationTypes.GET_BUY_GATEWAYS_REQUEST)
    let method = 'get'
    let uri = uris.BUY_GATEWAYS_PATH
    let data = payload
    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri, data }, { root: true }).then(function (result) {
      commit(mutationTypes.GET_BUY_GATEWAYS_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.GET_BUY_GATEWAYS_FAILURE, error.response.data)
    })
  }
}
