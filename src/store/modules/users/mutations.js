import mutationTypes from './mutation-types'

export default {
  [mutationTypes.USERS_LIST_REQUEST]: function (state) {
    state.usersListLoading = true
  },
  [mutationTypes.USERS_LIST_SUCCESS]: function (state, payload) {
    state.usersListLoading = false
    state.usersList = payload
  },
  [mutationTypes.USERS_LIST_FAILURE]: function (state) {
    state.usersListLoading = false
  }
}
