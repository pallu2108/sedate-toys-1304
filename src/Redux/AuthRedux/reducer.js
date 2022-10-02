import * as types from "./actionType"

const initialState = {
    
    isAuth: false,
    isAuthLoading: false,
    isAuthError: false
}
export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.USER_LOGIN_REQUEST:
            return {
                ...state, isAuthLoading: true
            }
        case types.USER_LOGIN_SUCCESS:
            return {
                ...state, isAuthLoading: false,
               
                isAuth: true,
                isAuthError: false,
                isAuthLoading: false
            }
        case types.USER_LOGIN_FAILURE:
            return {
                ...state, isAuthError: true,
                token: '',
                isAuth: false,
                isAuthError: true
            }
        default:
            return state ;
    }
}