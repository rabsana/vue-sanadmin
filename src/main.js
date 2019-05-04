import { commonModule, authModule, usersModule, settingsModule, supportModule, identificationModule, shopModule } from './store'
import commonActionTypes from './store/modules/common/action-types'

export default {
  install (Vue, options) {
    let { baseUrl, apiKey, store } = options
    store.registerModule('sanadmin/common', commonModule)
    store.registerModule('sanadmin/auth', authModule)
    store.registerModule('sanadmin/users', usersModule)
    store.registerModule('sanadmin/settings', settingsModule)
    store.registerModule('sanadmin/support', supportModule)
    store.registerModule('sanadmin/identification', identificationModule)
    store.registerModule('sanadmin/shop', shopModule)
    store.dispatch('sanadmin/common/' + commonActionTypes.SET_BASE_URL, baseUrl)
    store.dispatch('sanadmin/common/' + commonActionTypes.SET_API_KEY, apiKey)
  }
}
