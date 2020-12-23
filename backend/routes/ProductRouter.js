import express from 'express';
import { protect, admin } from '../middleware/AuthMiddleware.js';

import { deleteProduct, getProducts, 
    getProductsById, createProduct, 
    updateProduct, createProductReview,
    getTopProducts, getProductsByCategory, getProductsByBrand } from '../controllers/productController.js'
const router = express.Router()

router
    .route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)

router
    .route('/:id')
    .get(getProductsById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)

router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)

router.route('/category/:category')
    .get(getProductsByCategory)

router.route('/category/:category/brand/:brand')
    .get(getProductsByBrand)

export default router