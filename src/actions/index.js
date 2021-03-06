import axios from 'axios'
import { axiosWithAuth } from '../tools/axiosWithAuth'

const baseurl = 'https://bw-post-here-1.herokuapp.com/api'
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

export const unregister = id => {
    return dispatch => {
        dispatch({ type: 'UNREGISTERING' })
        axiosWithAuth()
        .delete(`${baseurl}/users/${id}`)
        .then(res => {
            dispatch({ type: 'UNREGISTER_SUCCESS', payload: res.data })
        })
        .catch(err => {
            dispatch({ type: 'UNREGISTER_ERROR', payload: err })
        })
    }
}

export const updateUser = object => {
    return dispatch => {
        axiosWithAuth()
        .put(`${baseurl}/users/${object.id}`, object.values)
        .then(res => {
            dispatch({ type: 'UPDATE_USER', payload: res.data })
        })
        .catch(err => {
            dispatch({ type: 'UPDATE_FAIL', payload: err })
        })
    }
}

export const add = payload => {
    return dispatch => {
        axiosWithAuth()
        .post(`${baseurl}/users/${payload.id}/subreddits`, payload.name)
        .then(res => {
            dispatch({ type: 'ADD_POST', payload: res.data })
        })
        .catch(err => {
            dispatch({ type: 'ADD_FAIL', payload: err })
        })
    }
}

export const saved = id => {
    return dispatch => {
        axiosWithAuth()
        .get(`${baseurl}/${id}/subreddits`)
        .then(res => {
            dispatch({ type: 'GET_LIST', payload: res.data })
        })
        .catch(err => {
            dispatch({ type: 'GET_FAIL', payload: err })
        })
    }
}

export const searchAPI = content => {
    return dispatch => {
        dispatch({type: 'SEARCHING'})
        //axios.post('https://reddit-post-here-1.herokuapp.com/predict', content)
        //axiosWithAuth().post(`${baseurl}/api/users/${content.id}/subreddits`, content.name)
        
        axios({
            method: 'post',
            //url: 'https://reddit-post-here-1.herokuapp.com/predict',
            url: 'https://stark-lowlands-53850.herokuapp.com/test',
            headers: {
                'Content-Type': 'application/javascript'
            },
            data: {
                name: content
            }
        })
        
        .then(res => {
            console.log(res)
            dispatch({ type: 'SEARCH_LIST', payload: res.data })
        })
        .catch(err => {
            dispatch({ type: 'SEARCH_FAIL', payload: err })
        })
    }
}

export const save = post => {

}

