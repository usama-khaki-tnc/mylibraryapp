import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})

export const register = payload => api.post(`/user/register`, payload)
export const login = payload => api.post(`/user/login`, payload)
export const createBook = payload => api.post('/book', payload)

const apis = {
  register,
  login,
  createBook,
}

export default apis