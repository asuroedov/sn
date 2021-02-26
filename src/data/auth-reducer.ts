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

        default:
            return state
    }
}

export const actions = {
    setTokenAC: (token: string) => ({type: 'auth-reducer/setToken', token})
}

export const loginTC = (login: string, password: string): CommonThunkType<ActionsType> => {
    return async (dispatch) => {
        const response = await AuthAPI.login(login, password)
        if (response.data.resultCode === ResponseCodes.Success) {
            dispatch(actions.setTokenAC(response.data.data.token))
        }
    }
}


export default authReducer

