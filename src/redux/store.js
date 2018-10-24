const intialState = {
    username: 'admin',
    password: 'admin',
    loginSuccess: false
}

export const reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'LOGINSUCCESS': {
            return {
                ...state,
                loginSuccess: false
            }
        }
        case 'GET_ALL_USER': {
            return {
                ...state,
                userInfo : action.userInfo
            }
        }

        default: return state
    }
}
