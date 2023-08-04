const jwt = require('jsonwebtoken');


const db = require("../models");

const { user : User } = db;

const { JWT_SECRET_KEY } = require('../common')

exports.makeToken = ({ email }) =>{
    const accessToken = jwt.sign({ 
            email
        }, 
        JWT_SECRET_KEY,
        {
            algorithm: 'HS256',
            allowInsecureKeySizes: true,
            expiresIn: "2m", // 24 hours
        }
    );
    console.log(accessToken)
    return accessToken;
};
exports.makeRefreshToken = () =>{
    const refreshToken = jwt.sign(
        {},  
        JWT_SECRET_KEY, 
        {
            algorithm: "HS256",
            expiresIn: "10m"
        }
    );
    console.log(refreshToken)
    return refreshToken;
};

// refresh token 유효성 검사
exports.refreshVerify = async (token, email) => {
    try {
        const user = await User.findOne({ email });
        if (token === user.token) {
            try {
                jwt.verify(token, JWT_SECRET_KEY);
                return true;
            } catch (err) {
                return false;
            }
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
};

// access token 유효성 검사
exports.verify = (token) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        return {
            ok: true,
            email: decoded.email
        };
    } catch (error) {
        return {
            ok: false,
            message: error.message,
        };
    }
};