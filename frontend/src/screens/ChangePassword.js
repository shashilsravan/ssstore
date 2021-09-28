import React, {useState, useEffect} from 'react'
import Meta from '../minicomponents/Meta'
import FormContainer from './FormContainer';
import Alert from 'react-bootstrap/Alert'
import firebase from 'firebase/app'
import Loader from '../minicomponents/Loader'
import {useDispatch, useSelector} from 'react-redux';
import { getUserByEmail, updateUserProfilePublic } from '../actions/userActions'


export default function ChangePassword({ location, history }) {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const dispatch = useDispatch()
    const userByMail = useSelector(state => state.userByMail)
    const { user } = userByMail

    const userUpdateProfilePublic = useSelector(state => state.userUpdateProfilePublic)
    const {success} = userUpdateProfilePublic

    const submitHandler = (e) => {
        e.preventDefault()
        if (password === confirmPassword){
            dispatch(getUserByEmail(email))
            if (user){
                dispatch(updateUserProfilePublic({ _id: user._id, name: user.name, email, password}))
            }
            if (success){
                history.push('/login')
            }
        }
        else{
            setError("passwords do not match")
        }
    }

    useEffect(() => {
        window.scrollTo(0,0)
        const search = location.search
        const params = new URLSearchParams(search)
        try {
            const oobCode = params.get('oobCode')
            firebase.auth().verifyPasswordResetCode(oobCode).then((email) => {
                setEmail(email)
            }).catch((errr) => {
                if (errr.code === "auth/invalid-action-code"){
                    history.push('/login')
                }
            })
        } catch (error) {
            history.push('/login')
        }
        setLoading(false)
    }, [])

    return (
        <div className="my-5 py-5">
            <Meta title='Resetting Password' />
            {loading ? <Loader /> : <FormContainer>
                <h4>Change Password for your account with email id:</h4>
                <h6>{email}</h6>
                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}
                <form onSubmit={submitHandler}>
                    <div className="form-group mt-4">
                        <label htmlFor="exampleInputEmail1">Enter new password</label>
                        <input type="password" className="form-control" id="exampleInputEmail1"
                        onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="exampleInputEmail2">Confirm new password</label>
                        <input type="password" className="form-control" id="exampleInputEmail2"
                        onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    
                    <button type="submit" className="btn btn-ssstore">
                        Change Password
                    </button>
                </form>
            </FormContainer>}
        </div>
    )
}
