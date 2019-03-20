export function authHeader() {
    let accessToken = localStorage.getItem('access_token');

    if(accessToken){
        return {'Authorization': 'Bearer ' + accessToken};
    }

    return {};
}