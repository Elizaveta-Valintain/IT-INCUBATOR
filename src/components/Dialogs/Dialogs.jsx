import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Mesage";
import React from "react";
import {addMessagesActionCreator, updateNewMessagesTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    // let newMessageElement = React.createRef();


    let addMessage = () => {
        //   let text = newMessageElement.current.value;
        //    props.addMessages()
        props.dispatch(addMessagesActionCreator())
    }

    let updateMessageText = (e) => {
        let text = e.target.value;
        // console.log(text)
        // props.updateNewMessageText(text);
        props.dispatch(updateNewMessagesTextActionCreator(text));
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
                        //ref={newMessageElement}
                        value={props.dialogsPage.newMessageText}
                        onChange={updateMessageText}
                        placeholder='Enter your message'
                    />
                </div>
                <div>
                    <button
                        onClick={addMessage}>Add message
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
