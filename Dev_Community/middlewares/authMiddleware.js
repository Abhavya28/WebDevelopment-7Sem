const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = async (req,res,next)=>{
    const { authorization } = req.headers;
    console.log(authorization);
    // console.log(req)

    const token = authorization.split(" ")[1]
    // console.log(token);

    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if(!user){
        res.status(401).json({
            message: "Unauthorized User"
        })
    }
    
    const { _id} = user.userId;

    const userFind = await User.findById(_id);

    if(userFind.length==0){
        return res.status(404).json({
            message: "User not found"
        });
    }

    req.user = user;
    
    next();
}


module.exports = { authMiddleware};