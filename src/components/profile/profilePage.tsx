import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {AppStateType} from "../../data/store";
import {getProfileInfoTC} from "../../data/profile-reducer";


const ProfilePage: React.FC = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams<{ userId: string | undefined }>()
    const currentUserId = useSelector((state: AppStateType) => state.auth.userId)
    let pageUserId = null

    useEffect(() => {
        pageUserId = params.userId ? +params.userId : currentUserId
        if (!pageUserId) {
            history.push('/login')
        } else {
            dispatch(getProfileInfoTC(pageUserId))
        }

    }, [])

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const userId = useSelector((state: AppStateType) => state.profile.userId)
    const login = useSelector((state: AppStateType) => state.profile.login)
    const status = useSelector((state: AppStateType) => state.profile.status)
    const photoUrl = useSelector((state: AppStateType) => state.profile.photoUrl)

    return (
        <div>
            <div>{String(isAuth)}</div>
            <div>userId: {userId}</div>
            <div>Login: {login}</div>
            <div>Status: {status}</div>
            <div>Photo url: {photoUrl}</div>
        </div>
    )
}

export default ProfilePage