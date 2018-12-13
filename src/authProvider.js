import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
// import {email, password} from 'react-Admin';

 
export default (type, params) => {
 
    if (type === AUTH_LOGIN) {
        if (type === AUTH_LOGIN) {
            const request = new Request('https://api.thetreep.com/api_int/v1/user/login', {
                method: 'POST',
                body: JSON.stringify({
                    'email': "foussenicoulibalypro@gmail.com",
                    'password': '123'
                 }),
                headers: new Headers({
                    'Content-Type': 'application/json', 
                    'api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnYiOiJ0ZXN0IiwiSUQiOiIiLCJOYW1lIjoiZm91c3Nlbmljb3VsaWJhbHlwcm9AZ21haWwuY29tIn0.R1MBDIEJv794_wzfI1zssHCr-WMdlveND-Hw4FTHddc',
                          
}),

            })
            return fetch(request)
                .then(response => {
                    
                    if (response.status < 200 || response.status >= 300) {
                        throw new Error(response.statusText);
                    }
                    var obj = response.json();
                    console.log(obj);
                    return Promise.result
                    // var user = obj.result;
                    // console.log(user);
                    
                    // var email = obj.email;
                    // console.log(email);
                    

                    
                })
                // .then(({ token }) => {
                //     localStorage.setItem('token', token);
                // });
        }
        return Promise.resolve();
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
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.reject('Unknown method');
};
