import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../minicomponents/Loader'
import AlertError from '../minicomponents/AlertError';
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import { logout } from '../actions/userActions'
import { listOrders } from '../actions/orderActions';
import Meta from '../minicomponents/Meta'


export default function OrderListScreen({ history }) {
    const dispatch = useDispatch()

    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList


    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        window.scrollTo(0,0)
        if (!userInfo){
            history.push('/login')
        }
        if (userInfo && !userInfo.isAdmin){
            dispatch(logout())
        }
        else{
            dispatch(listOrders())
        }
        // eslint-disable-next-line
    }, [dispatch, userInfo, history])

    return (
        <div className="my-5">
            <Meta title='Chaotic | Order List' />
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to='/AdMIn'>Admin Panel</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        All orders
                    </li>
                </ol>
            </nav>
            <h5 className="mt-5">All Orders: </h5>
            {loading 
                ? <Loader /> 
                : error 
                ? <AlertError error={error} />
                : (
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>User</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Total Price</th>
                                <th>Paid</th>
                                <th>Delivered</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order._id}>
                                    <td className={order.isProcessed && "fw-bolder"}>
                                        {order._id}
                                    </td>
                                    <td>{order.user && order.user.name}</td>
                                    <td>{order.user && order.shippingAddress.phone}</td>
                                    <td>
                                        {order.createdAt && order.createdAt.substring(0, 10)}
                                    </td>
                                    <td>
                                        {order.totalPrice}rs
                                    </td>
                                    <td>
                                        { order.isPaid ? (
                                            order.paidAt && order.paidAt.substring(0, 10)
                                        )
                                        : <i className="fas fa-times text-danger"></i>
                                    }
                                    </td>
                                    <td>
                                        { order.isDelivered ? (
                                            order.deliveredAt && order.deliveredAt.substring(0, 10)
                                        )
                                        : <i className="fas fa-times text-danger"></i> }
                                    </td>
                                    <td>
                                        <Link to={`/order/${order._id}`}>
                                            <button className="btn btn-light btn-sm">
                                                Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )
                }
        </div>
    )
}
