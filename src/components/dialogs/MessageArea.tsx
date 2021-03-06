import React from "react";
import s from './MessageArea.module.css'
import {Button, Input} from 'antd';

const { TextArea } = Input;

const MessageArea:React.FC = () => {
    return(
        <div className={s.container}>
            <div className={s.messageArea}>

            </div>

            <div className={s.inp}>
                <TextArea rows={4} />
            </div>

            <div>
                <Button>Send</Button>
            </div>
        </div>
    )
}

export default MessageArea