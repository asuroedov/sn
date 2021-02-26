import {CommonThunkType, InferActionsTypes} from "./store";
import {AuthAPI} from "../api/auth";
import {ResponseCodes} from "../api/api";

const initialState = {
    userId: null as null | number,
    login: null as null | string,
    token: null as null | string,
    isAuth: false
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const authReducer = (state: InitialStateType = initialState, actions: ActionsType): InitialStateType => {

    switch (actions.type) {
        case 'auth-reducer/setToken':
            return {...state, token: actions.token}
            break

        case 'auth-reducer/setAuthDate':
            return {...state, ...actions.data}
            break

        default:
            return state
    }
}

export const actions = {
    setTokenAC: (token: string) => ({type: 'auth-reducer/setToken', token} as const),
    setAuthDate: (data: InitialStateType) => ({type: 'auth-reducer/setAuthDate', data} as const)
}

export const loginTC = (login: string, password: string): CommonThunkType<ActionsType> => {
    return async (dispatch) => {
        const response = await AuthAPI.login(login, password)
        if (response.data.resultCode === ResponseCodes.Success) {
            dispatch(actions.setAuthDate({userId: response.data.data.userId, login: response.data.data.login, token: response.data.data.token,  isAuth: true}))
            localStorage.setItem('token', response.data.data.token)
        }
    }
}

export const getUserDataTC = (token: string): CommonThunkType<ActionsType> => {
    return async (dispatch) => {
        const response = await AuthAPI.me(token)
        if(response.data.resultCode === ResponseCodes.Success){
            dispatch(actions.setAuthDate({userId: response.data.data.userId, login: response.data.data.login, token: response.data.data.token,  isAuth: true}))
        }
    }
}

export default authReducer

