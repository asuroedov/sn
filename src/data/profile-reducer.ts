import {CommonThunkType, InferActionsTypes} from "./store";
import {ProfilePostType} from "../types";
import {ProfileAPI} from "../api/profile";
import {ResponseCodes} from "../api/api";

const initState = {
    userId: null as null | number,
    login: null as null | string,
    name: "Алексей",
    photoUrl: '',
    status: 'status',
    location: 'Rostov',
    lastSeanceDate: null as null | Date,
    posts: [] as Array<ProfilePostType>

}

export type ProfileStateType = typeof initState
type ActionsType = InferActionsTypes<typeof actions>

const profileReducer = (state = initState, action: ActionsType): ProfileStateType => {
    switch (action.type) {
        case 'profileReducer/SET_PROFILE_INFO':
            return {...state, ...action.data}
            break
        case 'profileReducer/SET_PHOTO_URL':
            return {...state, photoUrl: action.photoUrl}
            break
        default:
            return state
    }
}


const actions = {
    setProfileInfo: (data: ProfileStateType) => ({type: 'profileReducer/SET_PROFILE_INFO', data} as const),
    setPhotoUrl: (photoUrl: string) => ({type: 'profileReducer/SET_PHOTO_URL', photoUrl} as const)
}

export const getProfileInfoTC = (userId: number):CommonThunkType<ActionsType> => {
    return async (dispatch) => {
        const response = await ProfileAPI.getProfileInfo(userId)
        if(response.data.resultCode === ResponseCodes.Success){
            dispatch(actions.setProfileInfo(response.data.data))
            console.log('getProfileInfoTC')
        }
    }
}

export const setProfileAvatarTC = (file: File):CommonThunkType<ActionsType> => {
    return async (dispatch) => {
        const response = await ProfileAPI.uploadProfileAvatar(file)
        if(response.data.resultCode === ResponseCodes.Success){
            dispatch(actions.setPhotoUrl(response.data.data.photoUrl))
        }


    }
}

export default profileReducer