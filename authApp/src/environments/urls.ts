import { environment } from './environment.prod';

const hostPlusBaseUrl = (environment.production)?'http://localhost:5000/api/' : 'https://simple-angular-node-authapp.herokuapp.com/api'
export const urls = {
    auth:{
        login: hostPlusBaseUrl + 'auth/login',
        register: hostPlusBaseUrl + 'auth/register',
        renewToken: hostPlusBaseUrl + 'auth/renewToken'
    }
}