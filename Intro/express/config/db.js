const mongoose = require("mongoose");

const dbURL =
  "mongodb+srv://Shruthisri:Shruthisri123@cluster0.tyswe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
