const jwt = require("jsonwebtoken");


const authMiddleware = async (req,res,next)=>{
    const { authorization } = req.headers;
    console.log(authorization);
    // console.log(req)

    const token = authorization.split(" ")[1]
    // console.log(token);

    const tokenObject = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const { _id} = tokenObject;
    // console.log(_id);
    // FIND IN DB WITH THAT ID: IF PRESENT then NEXT(), OR NAHI HAI TO RETURN 



    
    next();
}


module.exports = { authMiddleware};