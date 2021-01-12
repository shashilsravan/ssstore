import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../minicomponents/Loader'
import FormContainer from './FormContainer';
import {Link} from 'react-router-dom'
import {logout, getUserDetails, updateUser } from '../actions/userActions'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { USER_UPDATE_RESET } from '../constants/userConstants'

export default function UserEditScreen({ match, history}) {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user} = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate

    useEffect(() => {
        window.scrollTo(0,0)
        if (!userInfo){
            history.push('/login')
        }
        if (userInfo && !userInfo.isAdmin){
            dispatch(logout())
        }
        if (successUpdate){
            dispatch({ type: USER_UPDATE_RESET })
            history.push('/AdMIn/userList')
        }
        else{
            if (!user.name || user._id !== userId){
                dispatch(getUserDetails(userId))
            }
            else{
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }
    }, [dispatch, userInfo, history, user, userId,
        successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        confirmAlert({
                title: `Updating User`,
                message: `Updating user details of ${name}`,
                buttons: [
                    {
                        label: 'Yes! Update',
                        onClick: () => dispatch(updateUser({ _id: userId, name, email, isAdmin}))
                    },
                    {
                        label: "No, Don't Update",
                        onClick: () => console.log()
                    }
                ]
            })
    }

    return (
        <div className="my-5">
            <Link to='/AdMIn/userList'>
                <button className="btn btn-dark float-right">
                    Go Back <i className="fas fa-backward"></i>
                </button>
            </Link>
            <br /><br />
            <FormContainer>
                <h4>Edit user</h4>
                {loadingUpdate && <Loader />}
                {errorUpdate && <div className="alert alert-danger mt-3" role="alert">
                        {errorUpdate}
                    </div> }
                {error && <div className="alert alert-danger mt-3" role="alert">
                        {error}
                    </div> }
                {loading 
                ? <Loader />
                : (
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Name:</label>
                            <input type="text" className="form-control" 
                            placeholder="John Doe" value={name} maxLength={20}
                            id="exampleInputName"
                            onChange={(e) => setName(e.target.value)} />
                            <small id="name Error" className="form-text">
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
                        <div className="form-group ml-4">
                            <input className="form-check-input" 
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={isAdmin}
                            onChange={(e) => setIsAdmin(e.target.checked)}/>
                            <label 
                            className="form-check-label" htmlFor="flexCheckDefault">
                                Is Admin?
                            </label>
                        </div>
                        
                        <button type="submit" className="btn btn-chaotic">
                            Update
                        </button>
                    </form>
                )}
            </FormContainer>
        </div>
    )
}
