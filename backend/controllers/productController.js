import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetching all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler (async(req, res) => {
    const pageSize = 12
    const page = Number(req.query.pageNumber) || 1

    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    const count = await Product.countDocuments({ ...keyword })
    const products = await Product.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page -1))
    const allProducts = await Product.find({ ...keyword })
    res.json({ products, page, pages: Math.ceil(count / pageSize), allProducts })
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

// @desc Creates new review
// @route POST /api/products/:id/reviews
// @access Private

const createProductReview = asyncHandler (async(req, res) => {

    const { rating, comment } = req.body
    
    const product = await Product.findById(req.params.id)

    if (product){
        const alreadyReviewed = product.reviews.find(review => 
            review.user.toString() === req.user._id.toString())

        if(alreadyReviewed){
            res.status(400)
            throw new Error('Sorry, You have submitted your review already!')
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        }

        product.reviews.push(review)
        product.numReviews = product.reviews.length
        product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length
        
        await product.save()
        res.status(201).json({ message: 'Review added' })
    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    }
})

// @desc Get top rated products
// @route POST /api/products/top
// @access Public

const getTopProducts = asyncHandler (async(req, res) => {
    const products = await Product.find({ }).sort({ rating: -1 }).limit(10)
    res.json(products)
})

// @desc Get products by category
// @route GET /api/products/category/:category
// @access Public

const getProductsByCategory = asyncHandler (async(req, res) => {
    const userCategory = req.params.category
    try{
        const products = await Product.find({ category: userCategory })
        res.json(products)
    }
    catch (error){
        throw new Error(error)
    }
})

// @desc Get products by brand and category
// @route GET /api/products/category/:category/brand/:brand
// @access Public

const getProductsByBrand = asyncHandler (async(req, res) => {
    const userCategory = req.params.category
    const userBrand = req.params.brand
    try{
        const products = await Product.find({ category: userCategory, brand: userBrand })
        res.json(products)
    }
    catch (error){
        throw new Error(error)
    }
})

export { getProducts, getProductsById, 
    deleteProduct, createProduct, 
    getProductsByBrand,
    updateProduct, createProductReview,
    getTopProducts, getProductsByCategory }