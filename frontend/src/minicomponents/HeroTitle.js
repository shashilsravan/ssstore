import React from 'react'
import './HeroTitle.css'

export default function HeroTitle({text}) {
    return (
        <div className="heroTitle mt-4">
            <h4><span>{text}</span></h4>
        </div>
    )
}
