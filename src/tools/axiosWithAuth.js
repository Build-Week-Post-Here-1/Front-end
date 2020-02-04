import axios from 'axios'

import { apiUrl } from '../config'

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: apiUrl,
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
}
