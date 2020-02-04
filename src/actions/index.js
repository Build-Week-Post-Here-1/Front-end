import axios from 'axios'
const baseurl = 'http://localhost:5000/api'

export const login = values => {
    return dispatch => {
        dispatch({ type: 'LOGIN' })
        axios.post(`${baseurl}/auth/login`, values)
        .then(res => {
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
        })
        .catch(err => {
            dispatch({ type: 'LOGIN_ERROR', payload: err })
        })
    }
}

export const register = values => {
    return dispatch => {
        dispatch({ type: 'REGISTER' })
        axios.post(`${baseurl}/auth/register`, values)
        .then(res => {
            dispatch({ type: 'REGISTER_SUCCESS', payload: res.data })
        })
        .catch(err => {
            dispatch({ type: 'REGISTER_ERROR', payload: err })
        })
    }
}

export const update = user => {

}

export const save = post => {

}

export const remove = post => {

}