import {CommonThunkType, InferActionsTypes} from "./store";
import {getUserDataTC} from "./auth-reducer";
import {setTOKEN} from "../api/api";

const initialState = {
    isInit: false
}

type InitialType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = CommonThunkType<ActionsType>

const initReducer = (state = initialState, actions: ActionsType): InitialType => {
    switch (actions.type) {
        case 'init-reducer/SetInit':
            return {...state, isInit: true}
            break

        default:
            return state
    }
}

const actions = {
    setInit: () => ({type: 'init-reducer/SetInit'} as const)
}


export const initializeTC = (): ThunkType => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token')
            if (token) {
                await dispatch(getUserDataTC(token))
                setTOKEN(token)
            }
            dispatch(actions.setInit())
        }catch (e) {
            dispatch(actions.setInit())
        }
    }
}


export default initReducer


