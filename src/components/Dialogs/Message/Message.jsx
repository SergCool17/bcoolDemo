import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const dialogs = [
    { id: 1, name: 'Dimon' },
    { id: 2, name: 'Helen' },
    { id: 3, name: 'Mark' },
    { id: 4, name: 'Egor' },
    { id: 5, name: 'Sveta' },
    { id: 6, name: 'Mike' },
    { id: 7, name: 'German' }
]
const messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Fine, thx, and you?' },
    { id: 4, message: 'Me too' },
    { id: 5, message: 'By the way, met Mike' },
    { id: 6, message: 'Nice' },
    { id: 7, message: 'Yeah' },
]
const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div><NavLink to={path}>{props.name}</NavLink></div>
    )
}
let dialogsElements = dialogs.map(el => <DialogItem name={el.name} id={el.id} />)

const MessageItem = (props) => {
    return (
        <div>{props.message}</div>
    )
}
let messagesElements = messages.map(el => <MessageItem message={el.message} />)

const Dialogs = (props) => {
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