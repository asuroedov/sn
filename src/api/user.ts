import axios from "axios";
import {BASE_URL, CommonResponseType} from "./api";

export type UserType = {
    login: string
    name: string
    shortName: string
    photoUrl: string
    userId: number
}

/*export type MessageType = {
    body: string
    date: Date
}*/

type UserResponseType = CommonResponseType<{totalCount: number, users: Array<UserType>}>


export const userAPI = {
    getUsers: (pageSize: number, pageNumber: number, queryLine: string) => {
        const line = queryLine ? `&queryLine=${queryLine}` : ''
        return axios.get<UserResponseType>(BASE_URL + `/users?pageSize=${pageSize}&pageNumber=${pageNumber}` + line)
    },
    getUsersByIds: (ids: Array<number>) => {
        return axios.post<CommonResponseType<{users: Array<UserType>}>>(BASE_URL + '/users', {ids})
    },
    /*getMessages: (userId: number) => {
        return axios.get<CommonResponseType<{messages: Array<MessageType>}>>(BASE_URL + '')
    }*/
}