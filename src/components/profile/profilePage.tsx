import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {AppStateType} from "../../data/store";
import {getProfileInfoTC} from "../../data/profile-reducer";
import Avatar from "./Avatar";
import ProfileInfo from "./ProfileInfo";
import s from './profilePage.module.css'


const ProfilePage: React.FC = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams<{ userId: string | undefined }>()
    const currentUserId = useSelector((state: AppStateType) => state.auth.userId)
    let pageUserId = null


    const photoUrl = useSelector((state: AppStateType) => state.profile.photoUrl)
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
    const name = useSelector((state: AppStateType) => state.profile.name)
    const lastSeanceDate = useSelector((state: AppStateType) => state.profile.lastSeanceDate)
    const location = useSelector((state: AppStateType) => state.profile.location)


    return (
        <div className={s.container}>

            <Avatar photoUrl={photoUrl}></Avatar>
            <ProfileInfo status={status} name={name} lastSeanceDate={lastSeanceDate} location={location}></ProfileInfo>


        </div>
    )
}

export default ProfilePage