import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';
import Meta from '../minicomponents/Meta'

export default function LeaveMessage({history}) {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userProblem, setUserProblem] = useState("")

    useEffect(() => {
        if (!userInfo){
            history.push('/login')
        }
        else{
            setUserEmail(userInfo.email)
            setUserName(userInfo.name)
        }
    }, [userInfo])
    
    return (
        <>
        <Meta title="Leave a message" />
        <div className="my-5">
            
            <div className="row">
                <div className="col-md-8">
                    <h5 className="mb-4">Hi {userName}!</h5>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Email ID
                        </label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={userEmail} disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Write your query:
                        </label>
                        <textarea 
                        onChange={(e) => setUserProblem(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <a href={`mailto:support@chaoticstores.com?body=${userProblem}`}
                    className="btn btn-success float-right">
                        Send Email <i className="fas fa-envelope"/>
                    </a>
                </div>
                <div className="col-md-4">
                    <div className="alert alert-primary" role="alert">
                        <p>
                            We will get back to you by email based on your query within 12-15 hours. 
                            <br/>
                            Thank you for choosing <strong>Chaotic</strong>!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
