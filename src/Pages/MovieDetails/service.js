import { axiosInstance } from "../../Utils/config/apiConfig"

export const getMovieDetails = async (id) => {
    const detailsResponse = await axiosInstance.get(`movie/${id}`)
    const details = await detailsResponse.data
    return details
}