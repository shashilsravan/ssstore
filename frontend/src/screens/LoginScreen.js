import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../minicomponents/Loader'
import Meta from '../minicomponents/Meta'
import { login } from '../actions/userActions'
import FormContainer from './FormContainer';

export default function LoginScreen({ location, history }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo } = userLogin

    useEffect(() => {
        if (userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    
    return (
        <div className="my-5 py-5">
            <Meta title='Chaotic | Login' />
            <FormContainer>
                <h2>Sign in</h2>
                {error && <div className="alert alert-danger mt-3" role="alert">
                        {error}
                    </div> }
                {loading && <Loader />}
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                        onChange={(e) => setEmail(e.target.value)} />
                        <small id="emailError" className="form-text text-danger errors">
                            Errors will be displayed here.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control" id="exampleInputPassword1" />
                        <small id="passwordError" className="form-text text-danger errors">
                            Errors will be displayed here
                        </small>
                    </div>
                    <button type="submit" className="btn btn-chaotic">
                        Login
                    </button>
                    <div className="row mt-2">
                        <div className="col">
                            New to Chaotic? &nbsp;
                            <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                                Register here!
                            </Link>
                        </div>
                    </div>
                </form>
            </FormContainer>
        </div>
    )
}
