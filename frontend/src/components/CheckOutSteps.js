import React from 'react'
import {Link} from 'react-router-dom'

export default function CheckOutSteps({step1, step2, step3, step4}) {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-light">
                    {
                        step1 
                        ? (
                            <li className="breadcrumb-item">
                                <Link to='/login'>Login</Link>
                            </li>
                        ) 
                        : (
                            <li className="breadcrumb-item text-muted">Login</li>
                        )
                    }

                    {
                        step2
                        ? (
                            <li className="breadcrumb-item">
                                <Link to='/shipping'>Shipping</Link>
                            </li>
                        ) 
                        : (
                            <li className="breadcrumb-item text-muted">Shipping</li>
                        )
                    }

                    {
                        step3 
                        ? (
                            <li className="breadcrumb-item">
                                <Link to='/payment'>Payment</Link>
                            </li>
                        ) 
                        : (
                            <li className="breadcrumb-item text-muted">Payment</li>
                        )
                    }

                    {
                        step4 
                        ? (
                            <li className="breadcrumb-item">
                                <Link to='/placeorder'>Placing order</Link>
                            </li>
                        ) 
                        : (
                            <li className="breadcrumb-item text-muted">Placing order</li>
                        )
                    }
                    
                </ol>
            </nav>
        </div>
    )
}
