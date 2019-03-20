import Vuex from 'vuex'
import auth from './store/modules/auth'

export default {
  install (Vue, options) {
    let {baseUrl, ApiKey} = options

    Vue.use(Vuex)

    let store = new Vuex.Store({
      strict: process.env.NODE_ENV !== 'production',
      modules: {
        auth
      }
    })
    Vue.prototype.$store = store
  }
}
