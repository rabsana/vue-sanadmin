import mutationTypes from './mutation-types'

export default {
  [mutationTypes.GET_SELL_GATEWAYS_REQUEST]: function (state, payload) {
    state.sellGateways = { ...state.sellGateways, status: 'loading', loading: true }
  },
  [mutationTypes.GET_SELL_GATEWAYS_SUCCESS]: function (state, payload) {
    state.sellGateways = { ...state.sellGateways, data: payload, status: 'success', loading: false }
  },
  [mutationTypes.GET_SELL_GATEWAYS_FAILURE]: function (state, payload) {
    state.sellGateways = { ...state.sellGateways, status: 'error', loading: false }
  },
  [mutationTypes.GET_BUY_GATEWAYS_REQUEST]: function (state, payload) {
    state.buyGateways = { ...state.buyGateways, status: 'loading', loading: true }
  },
  [mutationTypes.GET_BUY_GATEWAYS_SUCCESS]: function (state, payload) {
    state.buyGateways = { ...state.buyGateways, data: payload, status: 'success', loading: false }
  },
  [mutationTypes.GET_BUY_GATEWAYS_FAILURE]: function (state, payload) {
    state.buyGateways = { ...state.buyGateways, status: 'error', loading: false }
  }
}
