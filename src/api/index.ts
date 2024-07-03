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
    } 
)
request.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response && error.response.status === 401) {
            window.location.href = '/login'
        } else {
            return Promise.reject(error);
        }
    }
)
export default request