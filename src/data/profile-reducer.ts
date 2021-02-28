import {InferActionsTypes} from "./store";
import {ProfilePostType} from "../types";

const initState = {
    userId: null as null | number,
    login: null as null | string,
    photoUrl: null as null | string,
    status: null as null | string,
    lastSeanceDate: null as null | Date,
    posts: [] as Array<ProfilePostType>

}

export type InitialStateType = typeof initState
type ActionsType = InferActionsTypes<typeof actions>

const profileReducer = (state = initState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'MOCK' :
            return state
            break

        default:
            return state
    }
}


const actions = {
    mock: () => ({type: 'MOCK'} as const)
}


export default profileReducer