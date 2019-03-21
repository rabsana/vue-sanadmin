import actions from './actions'
import types from './types'
import mutations from './mutations'
import state from './state'

export const commonModule = {
  namespaced: true,

  actions,
  types,
  mutations,
  state
}
