const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initReducersTree = {
    posts: [
        {id: 1, message: 'How are you?', likesCount: 15},
        {id: 2, message: 'Select 2', likesCount: 14},
        {id: 3, message: 'I am, Serhii', likesCount: 52},
        {id: 4, message: 'Pooost', likesCount: 0},
        {id: 5, message: 'Pooost', likesCount: 106}
    ],
    newPostText: 'UA-Serhii&Natali',
    profile: null
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

        default:
            return state
    }
    return state;
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

export let  setUserProfile = (profile)=>{
    return ({type: SET_USER_PROFILE, profile})
}

export default profileReducer
