import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

export const identificationModule = {
  namespaced: true,

  state,
  actions,
  mutations,
  getters
}
