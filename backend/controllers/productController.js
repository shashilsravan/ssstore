import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetching all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler (async(req, res) => {
    const products = await Product.find({})
    res.json(products)
})

// @desc Fetching a single product
// @route GET /api/products/:id
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

// @desc Delete a product
// @route DELETE /api/products/:id
// @access Private/Admin

const deleteProduct = asyncHandler (async(req, res) => {
    const product = await Product.findById(req.params.id)
    if (product){
        await product.remove()
        res.json({ message: "product removed"})
    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    }
})

// @desc Create a product
// @route POST /api/products/
// @access Private/Admin

const createProduct = asyncHandler (async(req, res) => {
    const product = new Product({
        name: 'Sample Product Name',
        price: 0,
        actualPrice: 0,
        user: req.user._id,
        image: "path/to/image1",
        imageTwo: "path/to/image2",
        imageThree: "path/to/image3",
        imageFour: "path/to/image4",
        description: "Sample description of the product",
        brand: "PlainTees etc",
        category: "Tshirts etc",
        countInStock: 0,
        numReviews: 0
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

// @desc Update a product
// @route PUT /api/products/:id
// @access Private/Admin

const updateProduct = asyncHandler (async(req, res) => {

    const {name, price, description, image, imageTwo, imageThree, imageFour, 
        category, brand, isDress, dressType, actualPrice, countInStock } = req.body
    
    const product = await Product.findById(req.params.id)

    if (product){
        product.name = name
        product.description = description
        product.price = price
        product.actualPrice = actualPrice 
        product.image = image
        product.imageTwo = imageTwo
        product.imageThree = imageThree
        product.imageFour = imageFour
        product.category = category
        product.brand = brand
        product.isDress = isDress
        product.dressType = dressType
        product.countInStock = countInStock
        const updatedProduct = await product.save()
        res.json(updatedProduct)
    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    }
})



export { getProducts, getProductsById, deleteProduct, createProduct, updateProduct }