import jwt from 'jsonwebtoken'

export const verify = (sign) => {
    try {
        const token = JSON.parse(sign)

        let decode = jwt.verify(token, process.env.REACT_APP_JWT_SECRET_KEY)

        return decode
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            localStorage.removeItem('token')
        }
    }
}