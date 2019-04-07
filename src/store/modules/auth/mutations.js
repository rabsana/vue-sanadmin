import types from './types'
import store from 'store'

export default {
  disableIsLoading: function (state) {
    state.isLoading = false
  },
  enableIsLoading: function (state) {
    state.isLoading = true
  },
  setServerResponse: function (state, payload) {
    state.serverMessage = payload.message
    state.serverStatus = payload.status
    state.serverStatusCode = payload.status_code
  },

  [types.LOGIN_REQUEST]: function (state) {
    state.alertTitle = 'در حال دریافت اطلاعات، لطفا شکیبا باشید ...'
    state.alertType = 'warning'
    state.alertMessage = ''
    state.pendingRequest = true
    state.alertVisible = true
  },
  [types.LOGIN_FAILURE]: function (state, payload) {
    state.alertTitle = payload.message
    state.alertType = 'error'
    state.alertMessage = ''
    state.pendingRequest = false
    state.alertVisible = true
  },
  [types.LOGIN_SUCCESS]: function (state, payload) {
    state.alertTitle = 'تبریک، در حال انتقال ...'
    state.alertType = 'success'
    state.pendingRequest = false
    state.alertVisible = true
    state.isLoggedIn = true
    store.set('access_token', payload.access_token)
    setTimeout(function () {
      location.reload(true)
    }, 1500)
  }
}
