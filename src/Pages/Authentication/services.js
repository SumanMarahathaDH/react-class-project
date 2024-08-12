import {axiosInstance} from "../../Utils/config/apiConfig"
import { clear } from "../../Utils/config/storageConfig"

export const login = async () => {
    const response = await axiosInstance.get('authentication')
    return response
}

export const getUserDetail = async (accountId) => {
    const response = await axiosInstance.get(`account/${accountId}`)
    return response
}

export const logout = () => {
    clear()
    window.location.href = "/"
}