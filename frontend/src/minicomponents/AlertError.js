import React from 'react'

export default function AlertError({error}) {
    return (
        <div>
            <div className="alert alert-danger mt-5" role="alert">
                {error}
            </div>
        </div>
    )
}
