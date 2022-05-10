import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Mesage";
import React from "react";

const Dialogs = (props) => {

    // let newMessageBody = state.newMessageBody;


    let state = props.dialogsPage;

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value;
         props.updateNewMessagesBody(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div></div>
            <div>
                <div>
                    <textarea
                        value={state.newMessageText}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'
                    />
                </div>
                <div>
                    <button
                        onClick={onSendMessageClick}>Add message
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
