const express = require("express");
const {createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct} = require("../controllers/products");
const productRouter = express.Router();

//creating 
productRouter.post("/", createProduct);

//read
productRouter.get("/", getAllProducts);

// get product by id
productRouter.get("/:id", getProductById);

//update product(PUT & PATCH)
productRouter.put("/:id", updateProduct);

//delete a product
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;