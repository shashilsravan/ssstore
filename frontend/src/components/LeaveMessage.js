import React, {useState} from 'react'
import Meta from '../minicomponents/Meta'

export default function LeaveMessage({history}) {
    const [userProblem, setUserProblem] = useState("")
    
    return (
        <>
        <Meta title="Leave a message" />
        <div className="my-5 py-5">
            
            <div className="row">
                <div className="col-md-8">
                    <h5 className="mb-2">Hi, welcome to SS Stores!</h5>
                    <p className="text-secondary">
                        Our mail id: chaoticofficial203@gmail.com <br />
                        For instant support contact us directly at +91 8574198316 (Working days: 10AM - 4PM) <br />
                        Operating Address: 62-A, Kurmitola Chowk. Azamgarh, Uttar Pradesh. Pin code: 276001 <br />
                        Or reach us on social media platforms instagram/facebook from the icons below.
                    </p>
                    <div className="mb-2">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Write your query:
                        </label>
                        <textarea 
                        onChange={(e) => setUserProblem(e.target.value)}
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <a href={`mailto:chaoticofficial203@gmail.com?body=${userProblem}`}
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
