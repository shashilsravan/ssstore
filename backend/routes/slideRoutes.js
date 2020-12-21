import express from 'express';
import { createSlide, deleteSlide, getSlides } from '../controllers/slideController.js';
import { protect, admin } from '../middleware/AuthMiddleware.js';

const router = express.Router()

router.route('/').post(protect, admin, createSlide).get(getSlides)
router.route('/:id').delete(protect, admin, deleteSlide)

export default router