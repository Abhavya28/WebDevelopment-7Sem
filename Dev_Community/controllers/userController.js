const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");


const generateToken = (userId) =>{
    return jwt.sign({userId}, process.env.JWT_SECRET_KEY);

}

const registerUser = async (req,res) =>{
    const { firstName, lastName, emailId, password} = req.body;

    //VALIDATION

    if (!firstName || !emailId || !password){
        return res.status(400).send({message:"Please Add all mandatory fields"});
    }

    //Check the user existing already in db or not
    const userExists = await User.findOne({emailId});

    if (userExists){
        return res.status(400).json({message: "Already Exist"});
    }

    const hashPassword = await bcrypt.hash(password, 10);

    //CREATE USER IN YOUR DATABASE

    const newUser = await User.create({
        firstName,
        lastName,
        emailId,
        password:hashPassword
    });

    await newUser.save();

    const tokenGen = generateToken(newUser._id)
    console.log(tokenGen);
    
    return res.status(201).json("USER CREATED",tokenGen);
    
}


const loginUser = async (req,res) => {
     const { emailId, password} = req.body;

     //Validation:

     if (!emailId || !password){
        return res.status(400).send("Please Fill All the Details");
     }

     const userExists = await User.findOne({emailId});
     
     if(!userExists){
        return res.status(400).send("User not found !!")
     }
     if(password !== userExists.password){
        return res.status(400).send("Invalid Password");
    }
    const isMatched = await bcrypt.compare(password, userExists.password);
    if(!isMatched){
        return res.status(401).send("Invalid Password");
    }
    return res.status(200).json({
        message: "User Logged in Successfully",
        userName: userExists.firstName,
        emailId: userExists.emailId,
     });
}

module.exports = { registerUser, loginUser }