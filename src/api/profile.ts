import axios from "axios";
import {ProfileStateType} from "../data/profile-reducer";
import {BASE_URL, TOKEN} from "./api";


type ResponseGetProfileInfoType = {
    resultCode: number
    message: string
    data: ProfileStateType
}

export const ProfileAPI = {
    getProfileInfo: (userId: number) => {
        return axios.get<ResponseGetProfileInfoType>(BASE_URL + `/profile/${userId}`, {headers: {token: TOKEN}})
    },
    uploadProfileAvatar: (filePhoto: File) => {
        const formData = new FormData()
        formData.append("image", filePhoto)
        return axios.post(BASE_URL + `/photo`, formData, {headers: {token: TOKEN, 'Content-Type': 'multipart/form-data'}})
    }
}