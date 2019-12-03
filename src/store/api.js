import axios from 'axios'
import { HOST } from './apiConfig'

export const getData = (url) => {
  return axios.get(`${HOST}${url}`)
}


export const postData = (url, data) => {
  return axios.post(`${HOST}${url}`, data)
}