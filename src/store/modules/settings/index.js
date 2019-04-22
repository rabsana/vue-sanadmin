import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

export const settingsModule = {
  namespaced: true,

  state,
  actions,
  mutations,
  getters
}
