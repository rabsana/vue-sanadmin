import store from 'store'
export function getAccessToken () {
  return store.get('access_token')
}
export function setAccessToken (accessToken) {
  store.set('access_token', accessToken)
}
export function clearAccessToken () {
  store.remove('access_token')
}
