import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsersTC} from "../data/user-reducer";
import {AppStateType} from "../data/store";
import User from "./user";

type PropsType = {}

const UsersPage: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const pageSize = useSelector((state: AppStateType) => state.users.pageSize)
    const currentPage = useSelector((state: AppStateType) => state.users.currentPage)

    const users = useSelector((state: AppStateType) => state.users.users)

    useEffect(() => {
        dispatch(getUsersTC(pageSize, 1, ''))
    }, [])
    return (
        <div>
            {users.map((el, index) => <User key={ el.userId }
                                            userId={el.userId}
                                            photoUrl={el.photoUrl}
                                            name={el.name}
                                            shortName={el.shortName}/>)}
        </div>
    )
}

export default UsersPage