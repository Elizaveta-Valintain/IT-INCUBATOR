import React from "react";
import {addMessagesActionCreator, updateNewMessagesTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>{
        (store) => {
            let state = store.getState().dialogsPage;
            let onSendMessageClick = () => {
                store.dispatch(addMessagesActionCreator())
            }

            let onNewMessageChange = (text) => {
                store.dispatch(updateNewMessagesTextActionCreator(text));
            }

            return <Dialogs
                updateNewMessagesBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state}
            />
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;
