import { getAccessToken } from './access-token'

export function authHeader () {
  let accessToken = getAccessToken()

  if (accessToken) {
    return { 'Authorization': 'Bearer ' + accessToken }
  }

  return {}
}
