const mongoose = require("mongoose");

const dbURL = "mongodb+srv://Shruthisri:Shruthisri123@cluster0.tyswe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dbURL)
.then((function(connection){
    console.log("connected to db");
}))
.catch(err => console.log(err))


const productSchema = new mongoose.Schema({
    product_name:{
        type: String,
        required: true
    },
    product_price: {
        type: String,
        required: true
    },
    isInStock: {
        type: Boolean,
        required: true,
    },
    category: {
        type: String,
        required: true
    },

},{timestamps: true});

const ProductModel=mongoose.model("product", productSchema);