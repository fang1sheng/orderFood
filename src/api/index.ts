import axios from 'axios'
const request = axios.create({
    baseURL: '/api',
    timeout: 5000,
})
request.interceptors.request.use(
    config => {
        const token = localStorage.getItem('userId') as string
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
export default request