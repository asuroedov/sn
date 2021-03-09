import React, {MouseEventHandler} from "react";
import s from './DialogCard.module.css'
import defaultImage from '../../user.png'
import {BASE_URL, TOKEN} from "../../api/api";
import {socket} from "../../App";

type PropsType = {
    photoUrl?: string
    name: string
    date?: Date
    message?: string
    userId: number
}

const DialogCard: React.FC<PropsType> = ({userId, name, photoUrl, message}) => {

    const dialogsSelected = (e: any) => {
        socket.emit('MESSAGE:GET', TOKEN, userId)
    }

    return (
        <div className={s.container}>
            <div className={s.imgWrapper}>
                <img src={photoUrl ? BASE_URL + photoUrl : defaultImage}/>
            </div>

            <div onClick={dialogsSelected} className={s.wrapper}>
                <div className={s.nameDate}>
                    <div className={s.name}>
                        {name}
                    </div>
                    <div className={s.date}>
                        в 15:41
                    </div>
                </div>

                <div className={s.message}>
                    {message}
                </div>
            </div>
        </div>
    )
}

export default DialogCard