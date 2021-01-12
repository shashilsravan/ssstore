import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/ProductRouter.js'
import colors from 'colors'
import cors from 'cors'
import morgan from 'morgan';
import {notFound, errorHandler} from './middleware/ErrorMiddleware.js'
import userRoutes from './routes/UserRoutes.js'
import orderRoutes from './routes/OrderRoutes.js'
import slideRoutes from './routes/slideRoutes.js'
import { v4 as uuidv4 } from 'uuid';
import Stripe from 'stripe';
import Razorpay from 'razorpay';

dotenv.config()

const stripe = new Stripe(process.env.STRIPE_SECRET);


connectDB()

const app = express()
const PORT = process.env.PORT

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('API is running')
})

app.post('/api/orders/payments', (req, res) => {
    const {order, token} = req.body;
    console.log(`order: ${order}`);
    console.log(`price: ${order.totalPrice}`);

    const idempotencyKey = uuidv4()

    return stripe.customers.create({
        email: token.email,
        source: token.id })
            .then(customer => { stripe.charges.create({
                customer: customer.id,
                amount: order.totalPrice * 100,
                currency: 'inr',
                receipt_email: token.email
        }, {idempotencyKey})
    }).then(result => {
        res.status(200).json(result)
    }).catch(error => res.status(400).json(error))
})

const rpay = new Razorpay({
  key_id: process.env.RAZOR_KEY,
  key_secret: process.env.RAZOR_SECRET,
});

app.post('/razorpay/:amount', async (req, res) => {
    const amount = req.params.amount
    const currency = 'INR'
    const receipt = uuidv4()
    const options = {
        amount: (amount * 100).toString(), 
        currency, 
        receipt
    }
    try {
		const response = await rpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/slideshow', slideRoutes)



app.get('/api/config/paypal', 
    (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold))
