const initialState = {
    username: null,
    token: null,
    id: null,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state
            }
        case 'LOGIN_SUCCESS':
            localStorage.setItem('jwtToken', action.payload.token)
            return {
                ...state,
                username: action.payload.user.username,
                token: action.payload.token,
                id: action.payload.user.id
            }
        case 'LOGIN_ERROR':
            console.log(action.payload)
            return {
                ...state
            }
        case 'REGISTER':
            return {
                ...state
            }
        case 'REGISTER_SUCCESS':
            localStorage.setItem('jwtToken', action.payload.token)
            return {
                ...state,
                username: action.payload.user.username,
                token: action.payload.token,
                id: action.payload.user.id
            }
        case 'REGISTER_ERROR':
            console.log(action.payload)
            return {
                ...state
            }
        default:
            return state
    }
}