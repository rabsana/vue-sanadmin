import {loginApi} from '../../../api';
import types from './types';



export  default {
    login: function({commit}, payload){
        commit(types.LOGIN_REQUEST);
        loginApi(payload.email, payload.password).then(function (result) {
            commit(types.LOGIN_SUCCESS, result.data);

            //this.$router.push('/');

        }).catch(function (error) {
            commit(types.LOGIN_FAILURE, error.response.data);
        });

    },
    logout: function ({commit}, payload) {
        localStorage.removeItem('access_token');
    }
}