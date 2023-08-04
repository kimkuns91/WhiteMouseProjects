const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

const db = require("../models");
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];
    console.log(token)
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }
};

isAdmin = (req, res, next) => {
//   User.findById(req.userId).exec((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }

//     Role.find(
//       {
//         _id: { $in: user.roles }
//       },
//       (err, roles) => {
//         if (err) {
//           res.status(500).send({ message: err });
//           return;
//         }

//         for (let i = 0; i < roles.length; i++) {
//           if (roles[i].name === "admin") {
//             next();
//             return;
//           }
//         }

//         res.status(403).send({ message: "Require Admin Role!" });
//         return;
//       }
//     );
//   });
};

isModerator = (req, res, next) => {
//   User.findById(req.userId).exec((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }

//     Role.find(
//       {
//         _id: { $in: user.roles }
//       },
//       (err, roles) => {
//         if (err) {
//           res.status(500).send({ message: err });
//           return;
//         }

//         for (let i = 0; i < roles.length; i++) {
//           if (roles[i].name === "moderator") {
//             next();
//             return;
//           }
//         }

//         res.status(403).send({ message: "Require Moderator Role!" });
//         return;
//       }
//     );
//   });
};
exports.refresh = async (req, res)=>{
    // access, refresh 토큰이 헤더에 담겨 온 경우
    if (req.headers["authorization"] && req.headers["refresh"]){
        const accessToken = req.headers["authorization"].split(" ")[1];
        const refreshToken = req.headers["refresh"];
        
        // access token 검증 -> expired여야 함.
        const authResult = TokenUtils.verify(accessToken);
 
        // access token 디코딩하여 userId를 가져온다.
        const decoded = jwt.decode(accessToken);

        // 디코딩 결과가 없으면 권한이 없음을 응답.
        if (!decoded) {
            res.status(401).send(failResponse(401,"No authorized!"));
        }
        
        // access 토큰 만료 시
        if (authResult.ok === false && authResult.message === "jwt expired") {
          // 1. access token이 만료되고, refresh token도 만료 된 경우 => 새로 로그인해야합니다.
          const refreshResult = await TokenUtils.refreshVerify(refreshToken, decoded.id);
          if (refreshResult === false) {
            res.status(401).send(failResponse(401,"No authorized! 다시 로그인해주세요."));
          } else {
            // 2. access token이 만료되고, refresh token은 만료되지 않은 경우 => 새로운 access token을 발급
            const newAccessToken = TokenUtils.makeAccessToken({ id: decoded.id });
     
            res.status(200).send(successResponse(
                200,{
                accessToken: newAccessToken,
                refreshToken,
                }
                ));
          }
        } else {
          // 3. access token이 만료되지 않은경우 => refresh 할 필요가 없습니다.
          res.status(400).send(failResponse(400,"Acess token is not expired!"));
        }
      } else {
        // access token 또는 refresh token이 헤더에 없는 경우
        res.status(401).send(failResponse(400,"Access token and refresh token are need for refresh!"));
      }
};
const authJwt = {
    verifyToken,
    isAdmin,
    isModerator
};

module.exports = authJwt;