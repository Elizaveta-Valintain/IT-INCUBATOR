const ADD_MESSAGES = 'ADD-MESSAGES';
const UPDATE_NEW_MESSAGES_TEXT = 'UPDATE-NEW-MESSAGES-TEXT';


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGES:
            let newMessages = {
                id: 7,
                message: state.newMessageText
            }

            state.messages.push(newMessages)
            state.newMessageText = ''
            break;
        case UPDATE_NEW_MESSAGES_TEXT:
            state.newMessageText = action.newText
            break;
        default:
            return state
    }
    return state
}

export let addMessagesActionCreator = () => {
    return (
        {type: ADD_MESSAGES}
    )
}

export let updateNewMessagesTextActionCreator = (text) => {
    return (
        {type: UPDATE_NEW_MESSAGES_TEXT, newText: text}
    )
}
export default dialogsReducer
