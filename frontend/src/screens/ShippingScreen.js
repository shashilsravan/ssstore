import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckOutSteps from '../components/CheckOutSteps';
import HeroTitle from '../minicomponents/HeroTitle';
import FormContainer from './FormContainer';
import Meta from '../minicomponents/Meta'


export default function ShippingScreen({history}) {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [phone, setPhone] = useState(shippingAddress.phone)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [arena, setArena] = useState(shippingAddress.arena)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const cartItems = useSelector(state => state.cart.cartItems)

    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ phone, address, city, arena, postalCode }))
        history.push('/payment')
    }

    useEffect(() => {
        window.scrollTo(0,0)
        if (cartItems.length === 0){
            history.push('/cart')
        }
        if (!userInfo){
            history.push('/login')
        }
    }, [userInfo, history, cartItems])

    return (
        <div className="my-5">
            <Meta title="Chaotic | Shipping" />
            <CheckOutSteps step1={true} step2={true} />
            <FormContainer>
                <HeroTitle text="Shipping" />
                <form onSubmit={submitHandler} >
                    <div className="form-floating">
                        <input type="phone" className="form-control" 
                        value={phone} maxLength={10} placeholder="Phone number"
                        id="exampleForPhone" onChange={(e) => setPhone(e.target.value)} required />
                        <label htmlFor="exampleForPhone">Phone number</label>
                    </div>

                    <div className="form-group form-floating mt-3">
                        <input placeholder="enter address" type="phone" className="form-control" 
                        value={address} maxLength={200}
                        id="exampleForAddress" onChange={(e) => setAddress(e.target.value)} required/>
                        <label htmlFor="exampleForAddress">Address:</label>
                        <small id="addressError" className="form-text">
                            Enter detailed address
                        </small>
                    </div>

                    <div className="form-group form-floating">
                        <input placeholder="enter city" type="text" className="form-control" 
                        value={city} maxLength={20}
                        id="exampleForCity" onChange={(e) => setCity(e.target.value)} required/>
                        <label htmlFor="exampleForCity">City:</label>
                    </div>

                    <div className="form-group form-floating">
                        <input placeholder="enter state" type="text" className="form-control" 
                        value={arena} maxLength={20}
                        id="exampleForState" onChange={(e) => setArena(e.target.value)} required/>
                        <label htmlFor="exampleForState">State:</label>
                    </div>

                    <div className="form-group form-floating">
                        <input placeholder="enter pincode" type="text" className="form-control" 
                        value={postalCode} maxLength={6}
                        id="exampleForPinCode" onChange={(e) => setPostalCode(e.target.value)} required/>
                        <label htmlFor="exampleForPinCode">Pin Code:</label>
                    </div>

                    <button type="submit" className="btn btn-block btn-primary">
                        <i className="fas fa-money-check-alt"></i> Continue to Payment 
                    </button>
                </form>
            </FormContainer>
        </div>
    )
}
