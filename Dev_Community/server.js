//REQUIRE OR IMPORT ALL THE MODULES HERE ONLY
const express = require("express");
require("dotenv").config();

//IMPORT DB CONNECTION
const sbConnect = require("./config/database");

const userRouter = require("./routes/userRoutes");

//SET INSTANCES HERE ONLY
const app = express();



//VARIABLE DECLARATION HERE ONLY
const PORT = process.env.PORT || 4888;


// I WANT TO RUN A MIDDLEWARE
app.use(express.json());


//WE WILLL MAKE ROUTES

app.use("/api/user", userRouter);

//END POINTS : USER

app.get("/",(req,res)=>{
  res.send({message:"THIS IS DASHBOARD"})
})


dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
  });
});
