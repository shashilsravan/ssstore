import e from 'express'
import asyncHandler from 'express-async-handler'
import Slide from '../models/slideModel.js'

// @desc get all Slide
// @route GET /api/slideshow/
// @access Private/Admin

const getSlides = asyncHandler (async(req, res) => {
    const slides = await Slide.find({})
    res.json(slides)
})

// @desc Creating new slide
// @route POST /api/slideshow
// @access Private/Admin

const createSlide = asyncHandler (async (req, res) => {
    const { image, text } = req.body
    const slide = await Slide.findOne({ image })
    if (slide){
        res.status(400)
        throw new Error('Slide already there')
    }
    const newSlide = await Slide.create({ 
        image, text
     })
    if (newSlide){
        res.status(200).json({
            image, text
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid User Data")
    }
})

// @desc Delete a User
// @route DELETE /api/users/:id
// @access Private/Admin

const deleteSlide = asyncHandler (async(req, res) => {

    const slide = await Slide.findById(req.params.id)

    if (slide){
        await slide.remove()
        res.json({ message: 'Slide removed' })
    }
    else{
        res.status(404)
        throw new Error('Slide not found')
    }
})

export {createSlide, getSlides, deleteSlide}