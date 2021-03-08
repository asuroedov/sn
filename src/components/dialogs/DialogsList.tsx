import React, {useEffect, useState} from "react";
import s from './DialogsList.module.css'
import DialogCard from "./DialogCard";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../data/store";
import {getUsersByIdsTC} from "../../data/dialogs-reducer";
import {socket} from "../../App";

const DialogsList:React.FC = () => {

    const dispatch = useDispatch()
    const userId = useSelector((state: AppStateType) => state.auth.userId)
    const dialogs = useSelector((state: AppStateType) => state.dialogs.dialogs)

    useEffect(() => {

        const onConnected = (ids: Array<number>) => {
            dispatch(getUsersByIdsTC(ids))
        }

        socket.emit('DIALOGS:CONNECT', userId)
        socket.on('DIALOGS:CONNECTED', onConnected)

        return () => {
            socket.off('DIALOGS:CONNECTED', onConnected)
        }
    }, [])

    return(
        <div className={s.container}>


            <ul className={s.dialogsList}>
                {dialogs.map(el => <DialogCard key={el.userId} userId={el.userId} name={el.login} photoUrl={el.photoUrl}/>)}
            </ul>
        </div>
    )
}

export default DialogsList