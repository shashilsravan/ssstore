import express from 'express';
import { protect, admin } from '../middleware/AuthMiddleware.js';

import { deleteProduct, getProducts, 
    getProductsById, createProduct, 
    updateProduct, createProductReview,
    getTopProducts, getProductsByCategory, getProductsByBrand, getProductsByDeal } from '../controllers/productController.js'
const router = express.Router()

router.route('/top').get(getTopProducts)

router.route('/dealsForToday').get(getProductsByDeal)

router.route('/').get(getProducts).post(protect, admin, createProduct)

router.route('/:id').get(getProductsById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)

router.route('/:id/reviews').post(protect, createProductReview)

router.route('/category/:category').get(getProductsByCategory)

router.route('/category/:category/brand/:brand').get(getProductsByBrand)

export default router