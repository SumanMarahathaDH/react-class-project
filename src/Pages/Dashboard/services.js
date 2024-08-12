import { axiosInstance } from "../../Utils/config/apiConfig"

export const getPopularMovies = async () => {
    const response = await axiosInstance.get("movie/popular");
    const data = await response.data
    return data;
}