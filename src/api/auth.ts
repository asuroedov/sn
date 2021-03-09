import {BASE_URL, CommonResponseType, TOKEN} from "./api";
import axios from "axios";

type LoginResponseType = {
    resultCode: number
    message: string
    data: {
        userId: number
        login: string
        token: string
    }
}

type DeleteResponseType = {
    resultCode: number
    message: string
    data: {    }
}

export const AuthAPI = {
    registration: (login: string, password: string, name: string) => {
        return axios.post<CommonResponseType<{}>>(BASE_URL + `/registration`, {login, password, name})
    },
    login: (login: string, password: string) => {
        return axios.post<LoginResponseType>(BASE_URL + `/login`, {login, password})
    },
    logout: () => {
        return axios.delete<DeleteResponseType>(BASE_URL + `/login`, {headers: {token: TOKEN}})
    },
    me: (token: string) => {
        return axios.get<LoginResponseType>(BASE_URL + '/login', {headers: {token: token}})
    }
}