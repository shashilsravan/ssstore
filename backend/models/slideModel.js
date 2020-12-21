import mongoose from 'mongoose';

const slideSchema = mongoose.Schema({
    image: {type: String, required: true},
    text: {type: String, required: true, default: ""},
}, {
    timestamps: true
})

const Slide = mongoose.model('Slide', slideSchema)

export default Slide