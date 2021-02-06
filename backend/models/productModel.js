import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, ref: 'User'
    },
}, {
    timestamps: true
})

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, ref: 'User'
    },
    name: {
        type: String, required: true
    },
    image: {
        type: String, required: true
    },
    imageTwo: {
        type: String
    },
    imageThree: {
        type: String
    },
    imageFour: {
        type: String
    },
    description: {
        type: String, required: true
    },
    brand: {
        type: String, required: true
    },
    category: {
        type: String, required: true
    },
    price: {
        type: Number, required: true, default: 0
    },
    actualPrice: {
        type: Number, required: true, default: 0
    },
    reviews: [reviewSchema],
    countInStock: {
        type: Number, required: true, default: 0
    },
    rating: {
        type: Number, required: true, default: 0
    },
    numReviews: {
        type: Number, required: true, default: 0
    },
    isDress: {
        type: Boolean, required: true, default: false
    },
    dressType: {
        type: String, required: true, default: "None"
    },
    inDeal: {
        type: Boolean, required: false, default: false
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product
