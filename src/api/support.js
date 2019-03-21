import config from '../config'
import uris from './uris'
import { apiCall } from './api-call'

const tickets = function () {
  let method = 'get'
  let url = config.API_URL + uris.SUPPORT_TICKETS_LIST

  return apiCall(method, url)
}

export {
  tickets
}
