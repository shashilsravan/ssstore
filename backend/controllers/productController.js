import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetching all products
// @desc GET /api/products
// @access Public
const getProducts = asyncHandler (async(req, res) => {
    const products = await Product.find({})
    res.json(products)
})

// @desc Fetching a single product
// @desc GET /api/products/:id
// @access Public

const getProductsById = asyncHandler (async(req, res) => {
    const product = await Product.findById(req.params.id)
    if (product){
        res.json(product)
    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    }
})

export { getProducts, getProductsById }