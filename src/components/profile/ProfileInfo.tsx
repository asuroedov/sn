import React from "react";
import s from './ProfileInfo.module.css'

type PropsType = {
    name: string
    status: string
    lastSeanceDate: string
    location: string

}

const ProfileInfo:React.FC<PropsType> = (props) => {
    return (
        <div className={s.container}>
            <div className={s.container__item_name}>{props.name}</div>
            <div className={s.container__item_status}>{props.status}</div>
            <div className={s.container__item_lastSeanceDate}>{props.lastSeanceDate}</div>
            <div className={s.container__item__location}>
                Город: {props.location}
            </div>
        </div>
    )
}

export default ProfileInfo