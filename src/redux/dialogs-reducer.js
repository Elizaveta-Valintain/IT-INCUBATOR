const ADD_MESSAGES = 'ADD-MESSAGES';
const UPDATE_NEW_MESSAGES_TEXT = 'UPDATE-NEW-MESSAGES-TEXT';

let initReducersTree = {
    dialogs: [
        {id: 1, name: 'Admin'},
        {id: 2, name: 'Fill'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Andrew'},
        {id: 5, name: 'Lexa'},
        {id: 6, name: 'Givy'},
        {id: 7, name: 'dfgh'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'I am Serhii'},
        {id: 3, message: 'YeYoYo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ],
    newMessageText: 'UA-Serhii'
}

const dialogsReducer = (state = initReducersTree, action) => {

    switch (action.type) {
        case ADD_MESSAGES:
            let newMessages = {
                id: 7,
                message: state.newMessageText
            }

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessages]
            }


        case UPDATE_NEW_MESSAGES_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }

        default:
            return state
    }
    // return state
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
