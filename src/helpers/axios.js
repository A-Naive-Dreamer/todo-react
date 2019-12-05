import axios from 'axios'

export const AXIOS = (sign) => {
    const token = sign

    axios.defaults.headers.common['X-API-KEY'] = process.env.REACT_APP_API_JWT_SECRET_KEY

    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`
    }

    return axios
}