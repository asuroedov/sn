import axios from "axios";
import {ProfileStateType} from "../data/profile-reducer";
import {BASE_URL, TOKEN} from "./api";

export const ProfileAPI = {
    getProfileInfo: (userId: number) => {
        return axios.get<ProfileStateType>(BASE_URL + `/profile/${userId}`, {headers: {token: TOKEN}})
    }
}