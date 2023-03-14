import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})

export const register = payload => api.post(`/user/register`, payload)
export const login = payload => api.post(`/user/login`, payload)

const apis = {
  register,
  login,
}

export default apis