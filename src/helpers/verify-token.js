import jwt from 'jsonwebtoken'

export const verify = () => {
    try {
        const token = JSON.parse(localStorage.getItem('token'))

        let decode = jwt.verify(token, process.env.REACT_APP_JWT_SECRET_KEY)

        return decode
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            localStorage.removeItem('token')
        }
    }
}