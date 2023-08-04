const db = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../common');
const { makeRefreshToken, makeToken } = require("../utils/token.utils");

const { user : User } = db;
const { token : Token } = db;

exports.signin = async (req, res)=>{
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message : "존재하지 않는 이메일입니다." })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid){
            return res.status(401).json({ message : "비밀번호가 일치하지 않습니다." })
        }
        accessToken = await makeToken({ email })
        refreshToken = await makeRefreshToken()

        const refreshTokenObj = new Token({
            email,
            token: refreshToken,
        });

        await refreshTokenObj.save()

        res.status(200).json({ message : "Success", accessToken, refreshToken })
    } catch (error) {
        console.error('Error during signing:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
exports.getAuth = async (req, res)=>{
    const token = req.headers["x-access-token"];
    console.log(token)
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }
}