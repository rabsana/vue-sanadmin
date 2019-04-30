import mutationTypes from './mutation-types'

export default {
  [mutationTypes.GET_CERTIFICATES_REQUEST]: function(state, payload){
    state.certificates = {...state.certificates, status: 'loading', loading: true}
  },
  [mutationTypes.GET_CERTIFICATES_SUCCESS]: function(state, payload){
    state.certificates = {...state.certificates, data: payload, status: 'success', loading: false}
  },
  [mutationTypes.GET_CERTIFICATES_FAILURE]: function (state, payload) {
    state.certificates = {...state.certificates, status: 'error', loading: false}
  },
  [mutationTypes.GET_USER_CERTIFICATES_REQUEST]: function(state, payload){
    state.userCertificates = {...state.userCertificates, status: 'loading', loading: true}
  },
  [mutationTypes.GET_USER_CERTIFICATES_SUCCESS]: function(state, payload){
    state.userCertificates = {...state.userCertificates, data: payload, status: 'success', loading: false}
  },
  [mutationTypes.GET_USER_CERTIFICATES_FAILURE]: function (state, payload) {
    state.userCertificates = {...state.userCertificates, status: 'error', loading: false}
  },
  [mutationTypes.UPDATE_CERTIFICATE_REQUEST]: function(state, payload){
    state.updateCertificate = {...state.updateCertificate, status: 'loading', loading: true}
  },
  [mutationTypes.UPDATE_CERTIFICATE_SUCCESS]: function(state, payload){
    state.updateCertificate = {...state.updateCertificate, data: payload, status: 'success', loading: false}
  },
  [mutationTypes.UPDATE_CERTIFICATE_FAILURE]: function (state, payload) {
    state.updateCertificate = {...state.updateCertificate, status: 'error', loading: false}
  }
}
