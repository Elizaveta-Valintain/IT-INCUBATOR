import {profileAPI} from "../api/profileAPI";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
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
    newPostText: 'UA-Serhii&Natali',
    profile: null,
    status: ""
}

const profileReducer = (state = initReducersTree, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
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

export let updateNewPostTextActionCreator = (text) => {
    return (
        {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
}

export let addPostActionCreator = () => {
    return (
        {type: ADD_POST}
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
