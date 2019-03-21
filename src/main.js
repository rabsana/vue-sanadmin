import { commonModule, authModule } from './store'
import commonActionTypes from './store/modules/common/action-types'

export default {
  install (Vue, options) {
    let { baseUrl, apiKey, store } = options
    store.registerModule('sanadmin/common', commonModule)
    store.registerModule('sanadmin/auth', authModule)
    store.dispatch('sanadmin/common/'+commonActionTypes.SET_BASE_URL, baseUrl)
    store.dispatch('sanadmin/common/'+commonActionTypes.SET_API_KEY, apiKey)
  }
}
