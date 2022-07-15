import {authApi} from "../api/authAPI";

const SET_USER_DATE = 'SET_USER_DATE'

const initReducersTree = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const AuthReducer = (state = initReducersTree, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }


        default:
            return state
    }
};

export const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATE, data: {userId, login, email}})
export const getAuthUserData = () =>  (dispatch) => {
    authApi.getAuthMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
}

export default AuthReducer;
