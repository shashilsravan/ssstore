import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc Create new order
// @route POST /api/orders
// @access Private

const addOrderItems = asyncHandler (async(req, res) => {
    const { orderItems, shippingAddress, paymentMethod, 
        itemsPrice, shippingPrice, totalPrice } = req.body

        if (orderItems && orderItems.length === 0){
            res.status(400)
            throw new Error('No order items')
        }
        else{
            const order = new Order({
                user: req.user._id,
                orderItems, 
                shippingAddress, 
                paymentMethod, 
                itemsPrice, shippingPrice, totalPrice
            })
            const createdOrder = await order.save()
            res.status(201).json(createdOrder)
        }
})

// @desc get order
// @route GET /api/orders
// @access Private

const getOrderById = asyncHandler (async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')
    if (order) {
        res.json(order)
    }
    else{
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc update order to paid
// @route PUT /api/orders/:id/pay
// @access Private

const updateOrderToPaid = asyncHandler (async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (order) {
        order.isPaid = true
        order.paidAt = Date.now()
        const updatedOrder = await order.save()
        res.json(updatedOrder)
    }
    else{
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc update order to delivered
// @route PUT /api/orders/:id/deliver
// @access Private/Admin

const updateOrderToDelivered = asyncHandler (async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (order) {
        order.isDelivered = true
        order.deliveredAt = Date.now()
        const updatedOrder = await order.save()
        res.json(updatedOrder)
    }
    else{
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc update order to Processed
// @route PUT /api/orders/:id/process
// @access Private/Admin

const updateOrderToProcessed = asyncHandler (async (req, res) => {
    const message = req.body.message
    const order = await Order.findById(req.params.id)
    if (order) {
        order.isProcessed = true
        order.information = message
        order.processedAt = Date.now()
        const updatedOrder = await order.save()
        res.json(updatedOrder)
    }
    else{
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc Get logged in user orders
// @route GET /api/orders/myorders
// @access Private

const getMyOrders = asyncHandler (async (req, res) => {
    const orders = await Order.find({ user: req.user._id})
    res.json(orders)
})

// @desc Get all orders
// @route GET /api/orders
// @access Private/Admin

const getOrders = asyncHandler (async (req, res) => {
    const orders = await Order.find({}).populate('user', 'id name email')
    res.json(orders)
})


export {addOrderItems, getOrderById, 
    updateOrderToPaid, getMyOrders, 
    updateOrderToDelivered ,getOrders, updateOrderToProcessed }