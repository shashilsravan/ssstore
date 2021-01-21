import React from 'react'
import { Link } from 'react-router-dom'

export default function NoItems({text}) {
    return (
        <div>
            <div className="noItemsImage d-flex flex-column align-items-center">
                <img 
                height="150" width="150"
                src="https://cdn2.iconfinder.com/data/icons/ecommerce-outline-6/32/Ecommerce-shopping-sale-transaction_21-512.png" alt=""/>
                <h3>{text}</h3>
                <Link to='/' className="btn btn-block btn-light mt-2 mb-5">
                    Keep Shopping 
                </Link>
            </div>
        </div>
    )
}
