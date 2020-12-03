import React from 'react'

export default function FormContainer({children}) {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-md-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
