import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../minicomponents/Loader'
import { checkUser } from '../actions/userActions'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import HeroTitle from '../minicomponents/HeroTitle'
import { listMyOrders } from '../actions/orderActions';
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom';
import Step from '../minicomponents/Step';
import Meta from '../minicomponents/Meta'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'


export default function ProfileScreen({location, history}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    const dispatch = useDispatch()

    const orderListMy = useSelector(state => state.orderListMy)
    const { loading: loadingOrders, orders: ordersMy, error: errorOrders } = orderListMy

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    // const userCheck = useSelector(state => state.userCheck)
    // const {loading: loadingCheck, success: successCheck} = userCheck

    useEffect(() => {
        window.scrollTo(0,0)
        if (!userInfo){
            history.push('/login')
        }
        else{
            if ((user && !user.name) || success){
                dispatch({type: USER_UPDATE_PROFILE_RESET})
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
                
            }
            else{
                setName(user.name)
                setEmail(user.email)
            }
        }
        dispatch(checkUser())
    }, [dispatch, history, userInfo, user, success])

    const submitHandler  = (e) => {
        e.preventDefault()
        if (password !== confirmPassword){
            setMessage('Passwords should be same')
        }
        else{
            dispatch(updateUserProfile({ id: user._id, name, email, password}))
        }
    }

    return (
        <div className="my-4 mb-5">
            <Meta title='Profile' />
            <div className="row">
                <div className="col-md-4">
                    <HeroTitle text="User profile" />
                    {error && <div className="alert alert-danger mt-3" role="alert">
                            {error}
                        </div> }
                    {success && <div className="alert alert-success mt-3" role="alert">
                        Profile has been updated !!!
                    </div> }
                    {loading && <Loader />}
                    <div className='card p-4 bx-shadow'>
                        <img src="http://drjollydiagnostics.com/wp-content/uploads/2017/11/profile-placeholder.png" 
                            style={{width: 100, borderRadius: 100}}
                            alt="" className='mx-auto'/>
                        <p className='mx-auto my-3'>Hi {name} !!!</p>
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Name:</label>
                                <input type="text" className="form-control" 
                                placeholder="John Doe" value={name} maxLength={20}
                                id="exampleInputName"
                                onChange={(e) => setName(e.target.value)} /> 
                                <small id="nameError" className="form-text">
                                    Maximum 20 letters
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Enter new password: </label>
                                <input type="password"  value={password} minLength={4} maxLength={15}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control" id="exampleInputPassword2" />
                                <small id="passwordError" className="form-text">
                                    Leave it blank if you do not want to change your password
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword2">Re-enter new Password: </label>
                                <input type="password" minLength={4}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="form-control" id="exampleInputPassword2" />
                                <small id="passwordError" className="form-text text-danger">
                                    {message ?  message :  null}
                                </small>
                            </div>
                            <button type="submit" className="btn btn-dark">
                                Update Profile <i className="fas fa-pen mx-2"></i> 
                            </button>
                        </form>
                    </div>

                    {userInfo && userInfo.isAdmin ? (<Link to='/AdMIn' className="text-decoration-none">
                        <button className="btn btn-block btn-ssstore my-4">
                            <i className="fas fa-user-shield"></i> Admin Panel <i className="fas fa-user-lock"></i>
                        </button>
                    </Link>) : null }
                </div>
                <div className="col-md-8">
                    {/* {ordersMy.length} */}
                    <HeroTitle text="My Orders" />
                    {loadingOrders 
                    ? <Loader /> 
                    : errorOrders 
                    ? <div className="alert alert-danger my-2">
                        {errorOrders}
                    </div> 
                    : (
                        <Table bordered hover responsive className="table-sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {ordersMy.map(order => (
                                    <tr key={order._id}>
                                        <td>
                                            {order.orderItems.map(eachItem => (
                                                eachItem.name + ", "
                                            ))}
                                        </td>
                                        <td>{order.createdAt.substring(0, 10)}</td>
                                        <td>₹{order.totalPrice}</td>
                                        <td className="">
                                            <Step 
                                                Paid={order.isPaid} order={order}
                                                Processed={order.isProcessed} 
                                                Delivered={order.isDelivered} /></td>
                                        <td><Link to={`/order/${order._id}`}>
                                                <div className="btn btn-light">
                                                    Details
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </div>
            </div>
        </div>
    )
}
