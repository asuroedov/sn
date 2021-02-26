import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://localhost:5000'
})

export enum ResponseCodes{
    Success= 0,
    Error = 1
}
