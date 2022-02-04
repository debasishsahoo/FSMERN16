const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const Encode_Key = `${process.env.SECRET_KEY}`
const TimeOut = parseInt(`${process.env.EXPIRESIN}`)

const JwtHelper = {
    SigninToken: (TokenObj) => {
        return jwt.sign(
            TokenObj,
            Encode_Key,
            { expiresIn: TimeOut }
        )
    }
}

module.exports = JwtHelper