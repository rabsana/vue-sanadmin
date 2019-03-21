import { commonModule, authModule } from './store'

export default {
  install (Vue, options) {
    let { baseUrl, apiKey, store } = options
    store.registerModule('admin/common', commonModule)
    store.registerModule('admin/auth', authModule)
    store.dispatch('setBaseUrl', baseUrl)
    store.dispatch('setApiKey', apiKey)
  }
}
