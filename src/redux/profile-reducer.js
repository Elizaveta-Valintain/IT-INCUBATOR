const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

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
