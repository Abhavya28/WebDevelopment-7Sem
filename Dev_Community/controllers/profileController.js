const Profile = require("../models/profileModel")

const addProfileDetails = async (req,res) => {
    const {profileImg,experience, githubProfile, linkedinProfile, codingPlatform, skills, location, achievements} = req.body;

    //Validate Data
    if (!profileImg || !experience || !githubProfile || !linkedinProfile || !codingPlatform || !skills || !location || !achievements){
        return res.status(500).json({
            error: "Please add all fields!!"
        });
    }

    const newProfile = await Profile.create({
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

module.exports = { addProfileDetails,updateProfileDetails};