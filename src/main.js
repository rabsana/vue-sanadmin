import auth from './store/modules/auth'

export default {
  install (Vue, options) {
    let { baseUrl, ApiKey, store } = options
    store.registerModule('auth', auth)
  }
}
