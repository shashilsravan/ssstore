import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://Sravan:sravan777@cluster0.wdulb.gcp.mongodb.net/ecommerce?retryWrites=true&w=majority', {
            useUnifiedTopology: true, useNewUrlParser:true,
            useCreateIndex: true
        })
        console.log(`MongoDB connected:`.cyan.bold.underline)
    }
    catch (error){
        console.log('error :>> ', error.message.red.underline.bold);
        process.exit(1)
    }
}
export default connectDB

