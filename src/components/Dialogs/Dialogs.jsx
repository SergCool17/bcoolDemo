import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';



const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id} />)
    let messagesElements = props.state.messages.map(el => <MessageItem message={el.message} key={el.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>Dialogs:
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    {messagesElements}
                </div>
            </div>

        </div>
    )
};
export default Dialogs