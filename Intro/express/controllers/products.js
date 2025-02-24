const ProductModel = require("../models/products");

const createProduct = async (req, res) => {
  const body = req.body;
  const product = await ProductModel.create({
    product_name: body.product_name,
    product_price: body.product_price,
    isInStock: body.isInStock,
    category: body.category,
  });
  res.status(200).json({
    message: "product added",
    product,
  });
};

const getAllProducts = async (req, res) => {
    const product = await ProductModel.find({});
    res.status(200).json({
        message:"product found",
        product
    })
}

const getProductById = async (req, res) => {
    const {id} = req.params;
    const product = await ProductModel.find
    ({"isInStock":true})
    res.status(200).json({
        message:"product found",
        product
    })
}

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const product = await ProductModel.findByIdAndUpdate
    (id, body,{"returnDocument":'after'})
    res.status(200).json({
        message:"product updated",
        product
    })
}

const deleteProduct = async (req, res) => {
    const {id} = req.params;
    const product = await ProductModel.
        findByIdAndDelete(id);
    res.status(200).json({
        message:"product deleted",
        product
    })
}

module.exports={
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}

