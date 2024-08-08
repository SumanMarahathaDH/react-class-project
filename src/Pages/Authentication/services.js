import {axiosInstance} from "../../Utils/config/apiConfig"

export const login = async () => {
    const response = await axiosInstance.get('authentication')
    return response
}