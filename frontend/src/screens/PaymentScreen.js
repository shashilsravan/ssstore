import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckOutSteps from '../components/CheckOutSteps';
import HeroTitle from '../minicomponents/HeroTitle';
import FormContainer from './FormContainer';
import Meta from '../minicomponents/Meta'


export default function PaymentScreen({history}) {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    if (!shippingAddress){
        history.push('/shipping')
    }
    
    const cartItems = useSelector(state => state.cart.cartItems)

    const [paymentMethod, setPaymentMethod] = useState('Pre Paid')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    useEffect(() => {
        if (cartItems.length === 0){
            history.push('/cart')
        }
        if (!userInfo){
            history.push('/login')
        }
    }, [userInfo, cartItems])

    return (
        <div className="my-5">
            <Meta title="Chaotic | Payments" />
            <CheckOutSteps step1 step2 step3 />

            <FormContainer>
                <HeroTitle text="Payment Method"/>
                <form onSubmit={submitHandler} className="mt-5">
                    <div className="form-check my-4">
                        <input 
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="form-check-input" type="radio" name="paymentMethod" value='Pre Paid' id="paypal" checked={paymentMethod == 'Pre Paid'}/>
                        <label className="form-check-label" htmlFor="paypal">
                            UPI / CARD / NET BANKING
                        </label>
                    </div>
                    <div className="form-check my-4">
                        <input 
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="form-check-input" type="radio" value="COD" name="paymentMethod" id="COD" 
                        checked={paymentMethod == 'COD'} />
                        <label className="form-check-label" htmlFor="COD">
                            Cash on Delivery
                        </label>
                    </div>
                    <button type="submit" className="my-4 btn btn-block btn-info">
                        <i className="fas fa-money-check-alt"></i> Place order
                    </button>
                </form>
            </FormContainer>
        </div>
    )
}
