import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

export const paymentModule = {
  namespaced: true,

  state,
  actions,
  mutations,
  getters
}
