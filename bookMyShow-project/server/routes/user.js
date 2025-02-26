const express = require("express");
const UserModel = require("../models/user");

const userRouter = express.Router();

userRouter.post("/register", async(req, res) => {
    try{
        const {email} = req.body;
        //Check if user exists by using the email and findOne method
        const user = await UserModel.findOne({email});
        //If user exists, return a response to the user that User that User Already Exists
        if(user){
            return res.status(400).json({
                message: "User already exists"
            })
        }
        //If user does not exist, create a new user and save it to the database
        const newUser = new UserModel(req.body);
        await newUser.save();
        //Send a response to the user that Registration successful, please login
        return res.status(201).json({
            message: "User registered successfully"
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: err.message
        })
    }
})

//login
userRouter.post("/login", async(req, res) => {
    try{
        const{email, password: passwordFormClient} = req.body;
        const user = await UserModel.findOne({email});
        console.log(user);
        
        if(!user){
            return res.status(400).json({
                message: "User does not exists. please register."
            });
        }
        if(passwordFormClient !== user.password){
            return res.status(400).json({
                message: "Invalid Credentials"
            })
        }
        return res.status(200).json({
            message: "User logged in successfully"
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: err.message
        })
    }
})

module.exports = userRouter;