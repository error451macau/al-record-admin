import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from 'admin-on-rest';

var authenticated = false;

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;

        const request = new Request('https://al.error451macau.com/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
            credentials: 'include'
        })

        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                authenticated = true;
            })
    } else if (type === AUTH_LOGOUT) {
        const request = new Request('https://al.error451macau.com/api/logout', {
            method: 'POST',
            credentials: 'include'
        });

        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                authenticated = false;
            })
    } else if (type === AUTH_CHECK) {
        return authenticated ? Promise.resolve() : Promise.reject();
    }
};
