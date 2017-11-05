import { AUTH_LOGIN, AUTH_LOGOUT } from 'admin-on-rest';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;

        const request = new Request('http://127.0.0.1/api/login', {
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
                window.hello = response;
            })
    }
    if (type === AUTH_LOGOUT) {
        const request = new Request('http://127.0.0.1/api/logout', {
            method: 'POST',
            credentials: 'include'
        });

        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
            })
    }
};
