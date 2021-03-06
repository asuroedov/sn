import React from "react";
import s from './DialogCard.module.css'
import defaultImage from '../../user.png'

type PropsType = {
    photoUrl?: string
    name: string
    date?: Date
    message?: string
}

const DialogCard: React.FC<PropsType> = ({name, photoUrl, message}) => {
    return (
        <div className={s.container}>
            <div className={s.imgWrapper}>
                <img src={photoUrl ? photoUrl : defaultImage}/>
            </div>

            <div className={s.wrapper}>
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