import axios from 'axios';

const apiUrl = ''

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: apiUrl,
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};
