import mutationTypes from './mutation-types'

export default {
  [mutationTypes.USERS_LIST_REQUEST]: function (state, payload) {
    state.usersListLoading = true
  },
  [mutationTypes.USERS_LIST_SUCCESS]: function (state, payload) {
    state.usersListLoading = false
    state.usersList = payload
  },
  [mutationTypes.USERS_LIST_FAILURE]: function (state, payload) {
    state.usersListLoading = false
  },
  [mutationTypes.USER_DATA_REQUEST]: function (state, payload) {
    state.userData = {}
  },
  [mutationTypes.USER_DATA_SUCCESS]: function (state, payload) {
    state.userData = payload
  },
  [mutationTypes.USER_DATA_FAILURE]: function (state, payload) {
    state.userData = {}
  },
  [mutationTypes.UPDATE_USER_DATA_REQUEST]: function (state, payload) {
    //
  },
  [mutationTypes.UPDATE_USER_DATA_SUCCESS]: function (state, payload) {
    state.userData = payload
  },
  [mutationTypes.UPDATE_USER_DATA_FAILURE]: function (state, payload) {
    //
  }
}
