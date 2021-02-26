import {instance} from "./api";

type LoginResponseType = {
    resultCode: number
    message: string
    data: {
        token: string
    }
}

export const AuthAPI = {
    regist: () => {
        return 42
    },
    login: (login: string, password: string) => {
        return instance.post<LoginResponseType>(`/login`, {login, password})
    }
}