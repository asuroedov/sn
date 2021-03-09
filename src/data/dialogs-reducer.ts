import {CommonThunkType, InferActionsTypes} from "./store";
import {userAPI, UserType} from "../api/user";
import {ResponseCodes} from "../api/api";
import {MessageType} from "../types";

const initialState = {
    dialogs: [] as Array<UserType>,
    messages: [] as Array<MessageType>,
    currentDialog: null as null | number
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const dialogsReducer = (state = initialState, action: ActionsType):InitialStateType => {

    switch (action.type) {
        case 'dialogs-reducer/SET_DIALOGS':
            return {...state, dialogs: [...action.users]}
            break

        case "dialogs-reducer/SET_MESSAGES":
            return {...state, messages: [...action.messages]}
            break
        default:
            return state
            break
    }
}


export const actions = {
    setDialogs: (users: Array<UserType>) => ({type: 'dialogs-reducer/SET_DIALOGS', users} as const),
    setMessages: (to: number, messages: Array<MessageType>) => ({type: 'dialogs-reducer/SET_MESSAGES', to, messages} as const)
}



export const getUsersByIdsTC = (ids: Array<number>):CommonThunkType<ActionsType> => {
    return async (dispatch) => {
        const response = await userAPI.getUsersByIds(ids)
        if(response.data.resultCode === ResponseCodes.Success){
            console.log(response.data.data.users)
            dispatch(actions.setDialogs(response.data.data.users))
        }

    }
}

export const getMessagesTC = (toUserId: number):CommonThunkType<ActionsType> => {
    return async (dispatch) => {

    }
}

export default dialogsReducer