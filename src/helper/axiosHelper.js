import axios from 'axios'
import { BASE_URL } from '@/helper/keyHelper'
import {getToken} from "@/helper/localstorageHelper.js"
import {forceLogout} from "@/helper/functionHelper";

const axiosCustom = axios.create()
axiosCustom.defaults.baseURL = BASE_URL+'/v1'

// let TOKEN = getToken()
// if (TOKEN) {
//   axiosCustom.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`
// }

axiosCustom.interceptors.response.use(function (response) {
  return response
}, async (error) => {
  // if (error.response && error.response.status === 401) {
  //     await forceLogout()
  // }
  return Promise.reject(error)
})

export default axiosCustom
