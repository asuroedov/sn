import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsersTC} from "../data/user-reducer";
import {AppStateType} from "../data/store";
import User from "./user";
import {Pagination, Input} from "antd";
const { Search } = Input;

type PropsType = {}

const UsersPage: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const pageSize = useSelector((state: AppStateType) => state.users.pageSize)
    const currentPage = useSelector((state: AppStateType) => state.users.currentPage)
    const totalCount = useSelector((state: AppStateType) => state.users.totalCount)
    const queryLine = useSelector((state: AppStateType) => state.users.queryLine)

    const users = useSelector((state: AppStateType) => state.users.users)

    useEffect(() => {
        dispatch(getUsersTC(pageSize, 1, ''))
    }, [])

    const paginatorChanged = (page: number) => {
        dispatch(getUsersTC(pageSize, page, queryLine))
    }

    const onSearch = (text: string) => {
        dispatch(getUsersTC(pageSize, 1, text))
    }


    return (
        <div>
            <Pagination onChange={paginatorChanged} pageSize={pageSize} defaultCurrent={1} current={currentPage} total={totalCount} />
            <Search placeholder="Введите имя или короткое имя" onSearch={onSearch} style={{ width: 280, paddingTop: 20 }} />
            {users.map((el, index) => <User key={ el.userId }
                                            login={el.login}
                                            userId={el.userId}
                                            photoUrl={el.photoUrl}
                                            name={el.name}
                                            shortName={el.shortName}/>)}
        </div>
    )
}

export default UsersPage