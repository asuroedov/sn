import React, {useEffect} from "react";
import s from './MessageArea.module.css'
import {Button, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../data/store";
import {socket} from "../../App";
import { MessageType } from "../../types";
import {actions} from "../../data/dialogs-reducer";

const { TextArea } = Input;

const MessageArea:React.FC = () => {

    const dispatch = useDispatch()
    const currentDialog = useSelector((state:AppStateType) => state.dialogs.currentDialog)
    const messages = useSelector((state:AppStateType) => state.dialogs.messages)

    useEffect(() => {

        const setMessages = (to: number, messages: Array<MessageType>) => {
            console.log('setMessages ' + messages[0].body)
            dispatch(actions.setMessages(to, messages))
        }
        socket.on('MESSAGE:RECEIVED', setMessages)

        return () => {socket.off('MESSAGE:RECEIVED', setMessages)}
    }, [])

    return(
        <div className={s.container}>
            <div className={s.messageArea}>
                {messages.map((el, ind) => <div key={ind}>{el.body}</div>)}
            </div>

            <div className={s.inp}>
                <TextArea rows={3} />
            </div>

            <div>
                <Button>Send</Button>
            </div>
        </div>
    )
}

export default MessageArea