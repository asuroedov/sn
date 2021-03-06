import React from "react";
import { NavLink } from "react-router-dom";
import {BASE_URL} from "../api/api";
import defaultUserImg from '../user.png'
import s from './user.module.css'

type PropsType = {
    login: string
    photoUrl: string
    name: string
    shortName: string
    userId: number
}
const User:React.FC<PropsType> = ({login, photoUrl, name, shortName, userId}) => {
    return(
        <div className={s.container}>
            <div><NavLink to={'/profile/' + userId}><img src={photoUrl ? BASE_URL + photoUrl : defaultUserImg}/></NavLink></div>
            <div>{'login: ' + login}</div>
            <div>{'name: ' + name }</div>
            <div>{'short name: ' + shortName }</div>
        </div>
    )
}

export default User