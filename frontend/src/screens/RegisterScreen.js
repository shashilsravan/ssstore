import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../minicomponents/Loader'
import { register } from '../actions/userActions'
import Meta from '../minicomponents/Meta'
import FormContainer from './FormContainer';
import { useAuth } from '../AuthContext'

export default function RegisterScreen({history, location}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister
    const redirect = location.search ? location.search.split('=')[1] : '/'
    
    const { signup } = useAuth()
    
    useEffect(() => {
        window.scrollTo(0,0)
        if (userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = async (e) => {
        e.preventDefault()
        if (password === confirmPassword){
            try {
                await signup(email, password)
                dispatch(register(name, email, password))
            } catch (error) {
                console.log()
            }
        }
        else{
            setMessage('Passwords do not match!')
        }
    }
    return (
        
            <div className="my-5">
                <Meta title='Chaotic | Register' />
                <FormContainer>
                    <h2>Sign Up</h2>
                    {error && <div className="alert alert-danger mt-3" role="alert">
                            {error}
                        </div> }
                    {loading && <Loader />}
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Name:</label>
                            <input type="text" className="form-control" 
                            placeholder="John Doe" value={name} maxLength={20}
                            id="exampleInputName"
                            onChange={(e) => setName(e.target.value)} />
                            <small id="emailError" className="form-text">
                                Maximum 20 letters
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address: </label>
                            <input type="email" value={email}
                            className="form-control" id="exampleInputEmail1"
                            onChange={(e) => setEmail(e.target.value)} />
                            <small id="emailError" className="form-text text-danger errors">
                                Errors will be displayed here.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password: </label>
                            <input type="password"  value={password} minLength={4} maxLength={15}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control" id="exampleInputPassword1" />
                            <small id="passwordError" className="form-text">
                                Minimum 4 characters and maximum 15 characters
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Confirm Password: </label>
                            <input type="password" minLength={4}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="form-control" id="exampleInputPassword1" />
                            <small id="passwordError" className="form-text text-danger">
                                {message ?  message :  null}
                            </small>
                        </div>
                        <button type="submit" className="btn btn-chaotic">
                            Login
                        </button>
                        <div className="row mt-2">
                            <div className="col">
                                Already registered? &nbsp;
                                <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                                    Login Here!
                                </Link>
                            </div>
                        </div>
                    </form>
                </FormContainer>
            </div>
    )
}
