import mutationTypes from './mutation-types'

export default {
  [mutationTypes.FETCH_SETTINGS_REQUEST]: function (state, payload) {
    state.loading = true
  },
  [mutationTypes.FETCH_SETTINGS_SUCCESS]: function (state, payload) {
    state.loading = false
    state.settings = payload
  },
  [mutationTypes.USERS_LIST_FAILURE]: function (state, payload) {
    state.loading = false
  },
  [mutationTypes.UPDATE_SETTINGS_REQUEST]: function (state, payload) {
    state.loading = true
  },
  [mutationTypes.UPDATE_SETTINGS_SUCCESS]: function (state, payload) {
    state.settings = payload
  },
  [mutationTypes.UPDATE_SETTINGS_FAILURE]: function (state, payload) {
    // ToDo
  }
}
