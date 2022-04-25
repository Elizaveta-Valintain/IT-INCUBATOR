const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initReducersTree = {
    posts: [
        {id: 1, message: 'How are you?', likesCount: 15},
        {id: 2, message: 'Select 2', likesCount: 14},
        {id: 3, message: 'I am, Serhii', likesCount: 52},
        {id: 4, message: 'Pooost', likesCount: 0},
        {id: 5, message: 'Pooost', likesCount: 106}
    ],
    newPostText: 'UA-Serhii&Natali'
}

const profileReducer = (state = initReducersTree, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
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

export default profileReducer
