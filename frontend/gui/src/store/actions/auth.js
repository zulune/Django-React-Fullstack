import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispath => {
        setTimeout(() => {
            dispath(logout())
        }, expirationTime * 1000);
    }
}

export const authLogin = (username, password) => {
    return dispath => {
        dispath(authStart());
        axios.post('http://localhost:3000/rest-auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispath(authSuccess(token));
            dispath(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispath(authFail(err));
        })
    }
}

export const signUp = (username, email, password1, password2) => {
    return dispath => {
        dispath(authStart());
        axios.post('http://localhost:3000/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            passwor2: password2
        })
            .then(res => {
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispath(authSuccess(token));
                dispath(checkAuthTimeout(3600));
            })
            .catch(err => {
                dispath(authFail(err));
            })
    }
}