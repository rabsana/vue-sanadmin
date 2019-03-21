export default {
  usersArray: (state, getters) => {
    try {
      return state.usersList.data
    } catch (e) {
      return []
    }
  },
  usersPagination: (state, getters) => {
    try {
      return state.usersList.meta.pagination
    } catch (e) {
      return {}
    }
  }
}
