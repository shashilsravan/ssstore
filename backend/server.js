import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/ProductRouter.js'
import colors from 'colors'
import {notFound, errorHandler} from './middleware/ErrorMiddleware.js'
import userRoutes from './routes/UserRoutes.js'

dotenv.config()

connectDB()


const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running')
})


app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold))
