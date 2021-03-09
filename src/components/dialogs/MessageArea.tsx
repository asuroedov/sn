import React, {useEffect} from "react";
import s from './MessageArea.module.css'
import {Button, Form, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../data/store";
import {socket} from "../../App";
import {MessageType} from "../../types";
import {actions} from "../../data/dialogs-reducer";
import {TextAreaRef} from "antd/lib/input/TextArea";
import {TOKEN} from "../../api/api";


const {TextArea} = Input;

const MessageArea: React.FC = () => {

    const dispatch = useDispatch()
    const currentDialog = useSelector((state: AppStateType) => state.dialogs.currentDialog)
    const messages = useSelector((state: AppStateType) => state.dialogs.messages)

    useEffect(() => {

        const setMessages = (to: number, messages: Array<MessageType>) => {
            dispatch(actions.setMessages(to, messages))
        }
        socket.on('MESSAGE:RECEIVED', setMessages)

        return () => {
            socket.off('MESSAGE:RECEIVED', setMessages)
        }
    }, [])

    const sendClicked = (values: {message: string}) => {
        socket.emit('MESSAGE:SEND', TOKEN, currentDialog, values.message)
    }

    return (
        <div className={s.container}>
            <div className={s.messageArea}>
                {messages.map((el, ind) => <div key={ind}>{el.body}</div>)}
            </div>

            <Form onFinish={sendClicked} name="sendForm">
                <Form.Item
                    name="message"
                >
                    <TextArea rows={3}/>
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit">Send</Button>
                </Form.Item>

            </Form>

        </div>
    )
}

export default MessageArea