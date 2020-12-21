import React from 'react'

export default function Badge({variant, text, upper}) {
    return (
        <div>
            <span className={upper? `badge bg-${variant} text-uppercase resp-font`
            : `badge bg-${variant} resp-font` }>
                {text}
            </span>
        </div>
    )
}
