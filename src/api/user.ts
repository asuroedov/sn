import axios from "axios";
import {BASE_URL} from "./api";

export type UserType = {
    name: string
    shortName: string
    photoUrl: string
}

type UserResponseType = {
    resultCode: number
    message: string
    data: {
        totalCount: number
        users: Array<UserType>
    }
}

export const userAPI = {
    getUsers: (pageSize: number, pageNumber: number, queryLine: string) => {
        const line = queryLine ? `&queryLine=${queryLine}` : ''
        return axios.get<UserResponseType>(BASE_URL + `/users?pageSize=${pageSize}&pageNumber=${pageNumber}` + line)
    }
}