import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Meta from '../minicomponents/Meta'
import FormContainer from './FormContainer';
import { useAuth } from '../AuthContext'
import Alert from 'react-bootstrap/Alert'

export default function PasswordReset() {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const { resetPassword } = useAuth()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            setMessage("")
            setError("")
            await resetPassword(email)
            setMessage("An email has been sent to your registered email id with instructions, follow that to reset your password")
        } catch (error) {
            setError("Failed to reset password")
        }
    }
    return (
        <div className="my-5 py-5">
            <Meta title='Forgot Password' />
            <FormContainer>
                <h2>Reset Password</h2>
                {message && (
                    <Alert variant="primary">
                        {message}
                    </Alert>
                )}
                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}
                <form onSubmit={submitHandler}>
                    <div className="form-group mt-4">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                        onChange={(e) => setEmail(e.target.value)} required />
                        <small id="emailError" className="form-text text-muted">
                            Enter your registered email id to get reset password link
                        </small>
                    </div>
                    
                    <button type="submit" className="btn btn-ssstore">
                        Reset Password
                    </button>
                    <div className="row mt-2">
                        <div className="col">
                            New user? &nbsp;
                            <Link to='/register'>
                                Register here!
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            To login &nbsp;
                            <Link to='/login'>
                                Click here!
                            </Link>
                        </div>
                    </div>
                </form>
            </FormContainer>
        </div>
    )
}
