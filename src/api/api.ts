import axios from 'axios'

/*
export const instance = axios.create({
    baseURL: 'http://localhost:5000'
})
*/

export const BASE_URL = 'http://localhost:5000'
export enum ResponseCodes{
    Success= 0,
    Error = 1
}

export let TOKEN = null as string | null
export const setTOKEN = (token: string) => (TOKEN = token)