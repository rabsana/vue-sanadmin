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
  },
  [mutationTypes.FIND_TICKET_BY_ID_REQUEST]: function(state, payload){
    state.ticket = {...state.ticket, status: 'loading', loading: true}
  },
  [mutationTypes.FIND_TICKET_BY_ID_SUCCESS]: function(state, payload){
    state.ticket = {...state.ticket, data: payload, status: 'success', loading: false}
  },
  [mutationTypes.FIND_TICKET_BY_ID_FAILURE]: function (state, payload) {
    state.ticket = {...state.ticket, status: 'error', loading: false}
  },
  [mutationTypes.DELETE_TICKET_REQUEST]: function(state, payload){
    state.deleteTicket = {...state.deleteTicket, status: 'loading', loading: true}
  },
  [mutationTypes.DELETE_TICKET_SUCCESS]: function(state, payload){
    state.deleteTicket = {...state.deleteTicket, data: payload, status: 'success', loading: false}
  },
  [mutationTypes.DELETE_TICKET_FAILURE]: function (state, payload) {
    state.deleteTicket = {...state.deleteTicket, status: 'error', loading: false}
  },
  [mutationTypes.DELETE_MESSAGE_REQUEST]: function(state, payload){
    state.deleteMessage = {...state.deleteMessage, status: 'loading', loading: true}
  },
  [mutationTypes.DELETE_MESSAGE_SUCCESS]: function(state, payload){
    state.deleteMessage = {...state.deleteMessage, data: payload, status: 'success', loading: false}
  },
  [mutationTypes.DELETE_MESSAGE_FAILURE]: function (state, payload) {
    state.deleteMessage = {...state.deleteMessage, status: 'error', loading: false}
  },
  [mutationTypes.CREATE_MESSAGE_REQUEST]: function(state, payload){
    state.createMessage = {...state.createMessage, status: 'loading', loading: true}
  },
  [mutationTypes.CREATE_MESSAGE_SUCCESS]: function(state, payload){
    state.createMessage = {...state.createMessage, data: payload, status: 'success', loading: false}
  },
  [mutationTypes.CREATE_MESSAGE_FAILURE]: function (state, payload) {
    state.createMessage = {...state.createMessage, status: 'error', loading: false}
  }

}
