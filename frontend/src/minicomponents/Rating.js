import React from 'react'
import './Rating.css'
import PropTypes from 'prop-types'

Rating.defaultProps = {
    value: 0
}
export default function Rating({value, text}) {
    return (
        <div className='rating'>
            <span>
                <i 
                className={
                    value >= 1 
                    ? 'fa fa-star' 
                    : value >= 0.5 
                    ? 'fa fa-star-half-alt'
                    : 'far fa-star'}></i>
            </span>
            <span>
                <i 
                className={
                    value >= 2 
                    ? 'fa fa-star' 
                    : value >= 1.5 
                    ? 'fa fa-star-half-alt'
                    : 'far fa-star'}></i>
            </span>
            <span>
                <i 
                className={
                    value >= 3 
                    ? 'fa fa-star' 
                    : value >= 2.5 
                    ? 'fa fa-star-half-alt'
                    : 'far fa-star'}></i>
            </span>
            <span>
                <i 
                className={
                    value >= 4 
                    ? 'fa fa-star' 
                    : value >= 3.5 
                    ? 'fa fa-star-half-alt'
                    : 'far fa-star'}></i>
            </span>
            <span>
                <i 
                className={
                    value == 5 
                    ? 'fa fa-star' 
                    : value >= 4.5 
                    ? 'fa fa-star-half-alt'
                    : 'far fa-star'}></i>
            </span>
            <span className="ml-1 fromreviews">({ text && text })</span>
        </div>
    )
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
}
