import React from "react";
import DialogsList from "./DialogsList";
import s from './DialogsPage.module.css'
import MessageArea from "./MessageArea";

const DialogsPage:React.FC = () => {
    return(
        <div className={s.container}>
            <DialogsList/>
            <MessageArea/>
        </div>
    )
}

export default DialogsPage