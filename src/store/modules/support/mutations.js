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
  },
  [mutationTypes.CREATE_TICKET_REQUEST]: function(state, payload){
    state.createTicket = {...state.createTicket, status: 'loading', loading: true}
  },
  [mutationTypes.CREATE_TICKET_SUCCESS]: function(state, payload){
    state.createTicket = {...state.createTicket, data: payload, status: 'success', loading: false}
  },
  [mutationTypes.CREATE_TICKET_FAILURE]: function (state, payload) {
    state.createTicket = {...state.createTicket, status: 'error', loading: false}
  },
  [mutationTypes.GET_MESSAGES_REQUEST]: function(state, payload){
    state.messages = {...state.messages, status: 'loading', loading: true}
  },
  [mutationTypes.GET_MESSAGES_SUCCESS]: function(state, payload){
    state.messages = {...state.messages, data: payload, status: 'success', loading: false}
  },
  [mutationTypes.GET_MESSAGES_FAILURE]: function (state, payload) {
    state.messages = {...state.messages, status: 'error', loading: false}
  },
  [mutationTypes.GET_DEPARTMENTS_REQUEST]: function(state, payload){
    state.departments = {...state.departments, status: 'loading', loading: true}
  },
  [mutationTypes.GET_DEPARTMENTS_SUCCESS]: function(state, payload){
    state.departments = {...state.departments, data: payload, status: 'success', loading: false}
  },
  [mutationTypes.GET_DEPARTMENTS_FAILURE]: function (state, payload) {
    state.departments = {...state.departments, status: 'error', loading: false}
  },
  [mutationTypes.GET_PRIORITIES_REQUEST]: function(state, payload){
    state.priorities = {...state.priorities, status: 'loading', loading: true}
  },
  [mutationTypes.GET_PRIORITIES_SUCCESS]: function(state, payload){
    state.priorities = {...state.priorities, data: payload, status: 'success', loading: false}
  },
  [mutationTypes.GET_PRIORITIES_FAILURE]: function (state, payload) {
    state.priorities = {...state.priorities, status: 'error', loading: false}
  }

}
