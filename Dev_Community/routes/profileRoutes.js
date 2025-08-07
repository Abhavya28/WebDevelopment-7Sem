const express = require("express");
const { addProfileDetails } = require("../controllers/profileController");
const { authMiddleware } = require("../middlewares/authMiddleware");


const router = express.Router();

router.post("/",authMiddleware,addProfileDetails)




module.exports = router;