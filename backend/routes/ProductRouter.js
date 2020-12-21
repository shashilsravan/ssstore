import express from 'express';
import { protect, admin } from '../middleware/AuthMiddleware.js';

import { deleteProduct, getProducts, getProductsById, createProduct, updateProduct } from '../controllers/productController.js'
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


export default router