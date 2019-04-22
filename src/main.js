import { commonModule, authModule, usersModule, settingsModule } from './store'
import commonActionTypes from './store/modules/common/action-types'

export default {
  install (Vue, options) {
    let { baseUrl, apiKey, store } = options
    store.registerModule('sanadmin/common', commonModule)
    store.registerModule('sanadmin/auth', authModule)
    store.registerModule('sanadmin/users', usersModule)
    store.registerModule('sanadmin/settings', settingsModule)
    store.dispatch('sanadmin/common/' + commonActionTypes.SET_BASE_URL, baseUrl)
    store.dispatch('sanadmin/common/' + commonActionTypes.SET_API_KEY, apiKey)
  }
}
