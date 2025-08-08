const express = require("express");
const { addProfileDetails } = require("../controllers/profileController");
const { getProfileDetails, updateProfileDetails } = require("../controllers/profileController");
const { authMiddleware } = require("../middlewares/authMiddleware");


const router = express.Router();
router.get("/", authMiddleware, getProfileDetails);
router.post("/",authMiddleware,addProfileDetails)




module.exports = router;