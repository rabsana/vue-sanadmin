import types from './types'

export default {
  [types.SET_API_KEY]: function (state, apiKey) {
    state.apiKey = apiKey
  },
  [types.SET_BASE_URL]: function (state, baseUrl) {
    state.baseUrl = baseUrl
  }
}
