import mutationTypes from './mutation-types'

export default {
  [mutationTypes.FETCH_TICKETS_REQUEST]: function(state, payload){
    state.tickets = {...state.tickets, status: 'loading', loading: true}
  },
  [mutationTypes.FETCH_TICKETS_SUCCESS]: function(state, payload){
    state.tickets = {...state.tickets, data: payload, status: 'success', loading: false}
  },
  [mutationTypes.FETCH_TICKETS_FAILURE]: function (state, payload) {
    state.tickets = {...state.tickets, status: 'error', loading: false}
  }

}
