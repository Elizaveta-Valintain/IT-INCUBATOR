import React from "react";
import {addMessagesActionCreator, updateNewMessagesTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(addMessagesActionCreator())
    }

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessagesTextActionCreator(text));
    }

    return (
        <Dialogs
            updateNewMessagesBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    )
}

export default DialogsContainer;
