import actionTypes from './action-types'
import mutationTypes from './mutation-types'
import uris from '../../../api/uris'
import commonActionTypes from '../common/action-types'

export default {
  [actionTypes.GET_PRODUCTS]: function({commit, dispatch}, payload){
    commit(mutationTypes.GET_PRODUCTS_REQUEST)
    let method = 'get'
    let uri = uris.PRODUCTS_PATH
    let data = payload
    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri, data }, { root: true }).then(function (result) {
      commit(mutationTypes.GET_PRODUCTS_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.GET_PRODUCTS_FAILURE, error.response.data)
    })
  },
  [actionTypes.GET_ORDERS]: function({commit, dispatch}, payload){
    commit(mutationTypes.GET_ORDERS_REQUEST)
    let method = 'get'
    let uri = uris.PRODUCTS_PATH
    let data = payload
    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri, data }, { root: true }).then(function (result) {
      commit(mutationTypes.GET_ORDERS_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.GET_ORDERS_FAILURE, error.response.data)
    })
  },
  [actionTypes.CREATE_PRODUCT]: function({commit, dispatch}, payload){
    commit(mutationTypes.CREATE_PRODUCT_REQUEST)
    let method = 'post'
    let uri = uris.PRODUCTS_PATH
    let data = payload
    return dispatch('sanadmin/common/' + commonActionTypes.API_CALL, { method, uri, data }, { root: true }).then(function (result) {
      commit(mutationTypes.CREATE_PRODUCT_SUCCESS, result.data)
    }).catch(function (error) {
      commit(mutationTypes.CREATE_PRODUCT_FAILURE, error.response.data)
    })
  }
}
