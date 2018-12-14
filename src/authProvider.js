import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import { headers } from './constants';
import { API } from './constants';

export default (type, params) => {
    console.log(params)
    if (type === AUTH_LOGIN) {
        const request = new Request(API, {
            method: 'POST',
            body: JSON.stringify({
                'email': params.username,
                'password': params.password
            }),
            headers: new Headers(headers),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                var obj = response.json();
                return obj;
            })
            .then((obj) => {
                var token = obj.result.token
                console.log("déclencher dans le local storage:", token)
                localStorage.setItem('token', token);
            });


    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username') ?
            Promise.resolve() :
            Promise.reject();
    }
    return Promise.reject('Unknown method');
};