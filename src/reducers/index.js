
export const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state
            }
        case 'LOGIN_SUCCESS':
            localStorage.setItem('jwtToken', action.payload.token)
            localStorage.setItem('username', action.payload.user.username)
            localStorage.setItem('id', action.payload.user.id)
            return {
                ...state,
                username: action.payload.user.username,
                token: action.payload.token,
                id: action.payload.user.id
            }
        case 'LOGIN_ERROR':
            console.log(action.payload)
            return {
                ...state,
                error: action.payload
            }
        case 'REGISTER':
            return {
                ...state
            }
        case 'REGISTER_SUCCESS':
            localStorage.setItem('jwtToken', action.payload.token)
            localStorage.setItem('username', action.payload.user.username)
            localStorage.setItem('id', action.payload.user.id)
            return {
                ...state,
                username: action.payload.user.username,
                token: action.payload.token,
                id: action.payload.user.id
            }
        case 'REGISTER_ERROR':
            console.log(action.payload)
            return {
                ...state,
                error: action.payload
            }
        case 'UNREGISTERING':
            return {
                ...state
            }
        case 'UNREGISTER_SUCCESS':
            localStorage.clear()
            return 
        case 'UNREGISTER_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'ADD_POST':
            return {
                ...state,
                session: state.session + 1
            }
        case 'ADD_FAIL':
            return {
                ...state,
                error: action.payload
            }
        case 'GET_LIST':
            return {
                ...state,
                saved: action.payload
            }
        case 'GET_FAIL':
            return {
                ...state,
                error: action.payload
            }
        case 'UPDATE_USER':
            return {
                ...state,
                username: action.payload.username,
                
            }
        case 'UPDATE_FAIL':
            return {
                ...state,
                error: action.payload
            }
        case 'SEARCH_LIST':
            return {
                ...state,
                results: action.payload
            }
        case 'SEARCH_FAIL':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}