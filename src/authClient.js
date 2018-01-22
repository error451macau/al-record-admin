import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from 'admin-on-rest';

const apiBase = (localStorage && localStorage.API_BASE) ? localStorage.API_BASE : 'https://al.error451macau.com/api';

var authenticated = false;

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;

        const request = new Request(`${apiBase}/login`, {
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
        const request = new Request(`${apiBase}/logout`, {
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
