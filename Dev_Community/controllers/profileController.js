const Profile = require("../models/profileModel")
const User = require("../models/userModel");

const getProfileDetails = async(req,res) =>{
    try{
        const data = await Profile.find();
        res.status(200).json({
            message: "All Data of profile",
            data
        });
    }
    catch(err){
        res.status(500).json({
            error: err.message,
        });
    }
}
const addProfileDetails = async (req,res) => {
    const {profileImg,experience, githubProfile, linkedinProfile, codingPlatform, skills, location, achievements} = req.body;

    const {__id} = req.userData;


    const isUser = await User.find({userId:__id});

    //Validate Data
    if (!profileImg || !experience || !githubProfile || !linkedinProfile || !codingPlatform || !skills || !location || !achievements){
        return res.status(500).json({
            error: "Please add all fields!!"
        });
    }

    const newProfile = await Profile.create({
        userId,
        profileImg,
        experience,
        githubProfile,
        linkedinProfile,
        codingPlatform,
        skills,
        location,
        achievements
    })

    const profileAdd = await newProfile.save();

    return res.status(201).json({
        message: "Data Added Successfully",
        data: profileAdd
    })


}


const updateProfileDetails = async (req,res) =>{
    return

}

module.exports = {getProfileDetails, addProfileDetails,updateProfileDetails};