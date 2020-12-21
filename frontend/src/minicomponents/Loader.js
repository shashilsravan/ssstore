import React from 'react'

export default function Loader() {
    return (
        <div>
            <div className="spinner-border text-danger mx-auto my-5" 
                style={{display:"block", height:60, width: 60}}role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

