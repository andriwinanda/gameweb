
import axiosCustom from "@/helper/axiosHelper";

const login = async (data: any) => {
  return axiosCustom.post('/login', data)
    .then((response: any) => {
      let token = response.data.token;
      // axiosCustom.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return response
    })
    .catch((err: any) => {
      throw err
    })
}
const register = async (data: any) => {
  return axiosCustom.post('/register', data)
    .then((response: any) => {
      return response
    })
    .catch((err: any) => {
      throw err
    })
}
const logout = async () => {
  return axiosCustom.post('/logout')
    .then((response: any) => {
      return response
    })
    .catch((err: any) => {
      throw err
    })
}
export default {
  login,
  register,
  logout
}
