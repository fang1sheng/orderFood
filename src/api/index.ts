import axios from 'axios'
import { useRouter } from "vue-router"
const router = useRouter()
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
        if (error.response && error.response.status === 401) {
            router.push('/admin/login')
        } else {
            return Promise.reject(error);
        }
    }
)
export default request