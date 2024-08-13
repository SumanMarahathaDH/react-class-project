import { axiosInstance } from "../../Utils/config/apiConfig"
import {environmentConfig} from '../../Utils/config/environmentConfig'

export const getMovieDetails = async (id) => {
    const detailsResponse = await axiosInstance.get(`movie/${id}`)
    const details = await detailsResponse.data
    return details
}

export const addToFavourite = async (requestData) => {
    const favouriteResponse = await axiosInstance.post(`account/${environmentConfig.accountId}/favorite`,requestData)
    return favouriteResponse
}