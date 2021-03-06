import React from "react";
import s from './DialogsList.module.css'
import DialogCard from "./DialogCard";

const DialogsList:React.FC = () => {
    return(
        <div className={s.container}>
            <ul className={s.dialogsList}>
                <DialogCard message={'hello'} photoUrl={'https://sun9-13.userapi.com/impg/KoKgMmNRnUE2NILP7iyVIXzu53aqfSBmTwpYlw/bpj2WLt3Vao.jpg?size=1920x1080&quality=96&sign=926e5e46124d1c33c48c3af90a3a6383&type=album'} name={'Vasya'}/>
                <DialogCard name={'Nikita'}/>
                <DialogCard name={'Sasha'}/>
            </ul>
        </div>
    )
}

export default DialogsList