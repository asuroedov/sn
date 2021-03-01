import React, {ChangeEvent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {AppStateType} from "../../data/store";
import {getProfileInfoTC, setProfileAvatarTC} from "../../data/profile-reducer";
import {Image} from 'antd';
import defaultAvatarImg from '../../user.png'
import {BASE_URL} from "../../api/api";


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


    const fileSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0)
            dispatch(setProfileAvatarTC(e.target.files[0]))
    }
    return (
        <div>

            <Image
                width={200}
                src={photoUrl ? BASE_URL + photoUrl : defaultAvatarImg}
            />

            <input onChange={fileSelected} type={'file'}/>

            <div>{String(isAuth)}</div>
            <div>userId: {userId}</div>
            <div>Login: {login}</div>
            <div>Status: {status}</div>
            <div>hasPhoto: {photoUrl}</div>
        </div>
    )
}

export default ProfilePage