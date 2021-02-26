import {applyMiddleware, combineReducers, createStore } from "redux"
import {authReducer} from "./auth-reducer";
import middleware from 'redux-thunk'

const globalReducer = combineReducers(authReducer)
const store = createStore(globalReducer, applyMiddleware(middleware))


export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
type GlobalReducerType = typeof globalReducer
export type AppStateType = ReturnType<GlobalReducerType>

export default store