import {profileAPI} from "../api/profileAPI";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

let initReducersTree = {
    posts: [
        {id: 1, message: 'How are you?', likesCount: 15},
        {id: 2, message: 'Select 2', likesCount: 14},
        {id: 3, message: 'I am, Serhii', likesCount: 52},
        {id: 4, message: 'Pooost', likesCount: 0},
        {id: 5, message: 'Pooost', likesCount: 106}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initReducersTree, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export let addPostActionCreator = (newPostText) => {
    return (
        {type: ADD_POST, newPostText}
    )
}

export let setUserProfile = (profile) => {
    return ({type: SET_USER_PROFILE, profile})
}

export let setStatus = (status) => {
    return ({type: SET_STATUS, status})
}


export const getUserProfile = (userId) => (dispatch) => {

    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getStatus = (userId) => (dispatch) => {

    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status) => (dispatch) => {

    profileAPI.updateStatus(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status))
            }

        })
}


export default profileReducer
