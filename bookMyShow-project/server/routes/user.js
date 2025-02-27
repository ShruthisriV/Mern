const express = require("express");
const {registerUser, loginUser} = require("../controller/user");
const userRouter = express.Router();

userRouter.post("/register", registerUser);

//login
userRouter.post("/login", loginUser);

module.exports = userRouter;