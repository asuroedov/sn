import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../data/store";


const ProfilePage: React.FC = () => {

    const userId = useSelector((state: AppStateType) => state.auth.userId)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const login = useSelector((state: AppStateType) => state.auth.login)

    return(
        <div>
            <div>{userId}</div>
            <div>{String(isAuth)}</div>
            <div>{login}</div>
        </div>
    )
}

export default ProfilePage