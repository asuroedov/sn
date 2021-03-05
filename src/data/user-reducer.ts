import {CommonThunkType, InferActionsTypes} from "./store";
import {userAPI, UserType} from "../api/user";
import {ResponseCodes} from "../api/api";

const initialState = {
    users: [] as Array<UserType>,
    totalCount: 0,
    pageSize: 5,
    currentPage: 1
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const userReducer = (state = initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'user-reducer/SET_USERS':
            return {...state, users: [...action.users]}
            break

        default:
            return state
    }

}

const actions = {
    setUsers: (users: Array<UserType>) => ({type: 'user-reducer/SET_USERS', users} as const)
}

export const getUsersTC =  (pageSize: number, pageNumber: number, queryLine: string): CommonThunkType<ActionsType> => {
    return async (dispatch) => {
        const response = await userAPI.getUsers(pageSize, pageNumber, queryLine)
        if(response.data.resultCode === ResponseCodes.Success){
            dispatch(actions.setUsers(response.data.data.users))
        }
    }
}





export default userReducer