import axios from 'axios'
import { environmentConfig } from './environmentConfig'
import { getItem } from './storageConfig'

export const axiosInstance = axios.create({
    baseURL: environmentConfig.baseURL
})

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'

axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = environmentConfig.apiToken
      // const isAuthenticated = getItem('isAuthenticated')
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
)