import React from "react";
import {BASE_URL} from "../api/api";
import defaultUserImg from '../user.png'
import s from './user.module.css'

type PropsType = {
    photoUrl: string
    name: string
    shortName: string
}
const User:React.FC<PropsType> = ({photoUrl, name, shortName}) => {
    return(
        <div className={s.container}>
            <div><img src={photoUrl ? BASE_URL + photoUrl : defaultUserImg}/></div>
            <div>{'name: ' + name }</div>
            <div>{'short name: ' + shortName }</div>
        </div>
    )
}

export default User