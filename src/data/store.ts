import {Action, applyMiddleware,  createStore, compose, combineReducers } from "redux"
import authReducer from "./auth-reducer";
import middleware, { ThunkAction } from 'redux-thunk'

const globalReducer = combineReducers({
    auth: authReducer
});


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(globalReducer, composeEnhancers(applyMiddleware(middleware)))


export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
type GlobalReducerType = typeof globalReducer
export type AppStateType = ReturnType<GlobalReducerType>
export type CommonThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

export default store