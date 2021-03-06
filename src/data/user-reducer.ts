import {CommonThunkType, InferActionsTypes} from "./store";
import {userAPI, UserType} from "../api/user";
import {ResponseCodes} from "../api/api";
import {bindReporter} from "web-vitals/dist/modules/lib/bindReporter";

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
            return {...state, totalCount: action.totalCount, users: [...action.users]}
            break

        case "user-reducer/SET_CURRENT_PAGE":
            return {...state, currentPage: action.current}
            break
        default:
            return state
    }

}

const actions = {
    setUsers: (totalCount: number, users: Array<UserType>) => ({type: 'user-reducer/SET_USERS', totalCount, users} as const),
    setCurrentPage: (current: number) => ({type: 'user-reducer/SET_CURRENT_PAGE', current} as const)
}

export const getUsersTC =  (pageSize: number, pageNumber: number, queryLine: string): CommonThunkType<ActionsType> => {
    return async (dispatch) => {
        const response = await userAPI.getUsers(pageSize, pageNumber, queryLine)
        if(response.data.resultCode === ResponseCodes.Success){
            dispatch(actions.setUsers(response.data.data.totalCount, response.data.data.users))
            dispatch(actions.setCurrentPage(pageNumber))
        }
    }
}





export default userReducer