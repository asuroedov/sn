import {CommonThunkType, InferActionsTypes} from "./store";
import {ProfilePostType} from "../types";
import {ProfileAPI} from "../api/profile";
import {ResponseCodes} from "../api/api";

const initState = {
    userId: null as null | number,
    login: null as null | string,
    photoUrl: null as null | string,
    status: null as null | string,
    lastSeanceDate: null as null | Date,
    posts: [] as Array<ProfilePostType>

}

export type ProfileStateType = typeof initState
type ActionsType = InferActionsTypes<typeof actions>

const profileReducer = (state = initState, action: ActionsType): ProfileStateType => {
    switch (action.type) {
        case 'MOCK' :
            return state
            break

        case 'profileReducer/SET_PROFILE_INFO':
            return {...state, ...action.data}
            break
        default:
            return state
    }
}


const actions = {
    mock: () => ({type: 'MOCK'} as const),
    setProfileInfo: (data: ProfileStateType) => ({type: 'profileReducer/SET_PROFILE_INFO', data} as const)
}

export const getProfileInfoTC = (userId: number):CommonThunkType<ActionsType> => {
    return async (dispatch) => {
        const response = await ProfileAPI.getProfileInfo(userId)
        if(response.data.resultCode === ResponseCodes.Success){
            dispatch(actions.setProfileInfo(response.data.data))
        }
    }
}

export const setProfileAvatarTC = (file: File):CommonThunkType<ActionsType> => {
    return async (dispatch) => {
        const response = await ProfileAPI.uploadProfileAvatar(file)

    }
}

export default profileReducer