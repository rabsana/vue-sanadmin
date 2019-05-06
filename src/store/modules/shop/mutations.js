import mutationTypes from './mutation-types'

export default {
  [mutationTypes.GET_PRODUCTS_REQUEST]: function (state, payload) {
    state.products = { ...state.products, status: 'loading', loading: true }
  },
  [mutationTypes.GET_PRODUCTS_SUCCESS]: function (state, payload) {
    state.products = { ...state.products, data: payload, status: 'success', loading: false }
  },
  [mutationTypes.GET_PRODUCTS_FAILURE]: function (state, payload) {
    state.products = { ...state.products, status: 'error', loading: false }
  },
  [mutationTypes.GET_ORDERS_REQUEST]: function (state, payload) {
    state.orders = { ...state.orders, status: 'loading', loading: true }
  },
  [mutationTypes.GET_ORDERS_SUCCESS]: function (state, payload) {
    state.orders = { ...state.orders, data: payload, status: 'success', loading: false }
  },
  [mutationTypes.GET_ORDERS_FAILURE]: function (state, payload) {
    state.orders = { ...state.orders, status: 'error', loading: false }
  },
  [mutationTypes.CREATE_PRODUCT_REQUEST]: function (state, payload) {
    state.createProduct = { ...state.createProduct, status: 'loading', loading: true }
  },
  [mutationTypes.CREATE_PRODUCT_SUCCESS]: function (state, payload) {
    state.createProduct = { ...state.createProduct, data: payload, status: 'success', loading: false }
  },
  [mutationTypes.CREATE_PRODUCT_FAILURE]: function (state, payload) {
    state.createProduct = { ...state.createProduct, status: 'error', loading: false }
  }
}
