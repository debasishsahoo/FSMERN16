const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const Encode_Key = `${process.env.SECRET_KEY}`

const Auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;
        
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, Encode_Key);
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next()
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = Auth