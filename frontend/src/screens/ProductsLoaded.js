import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Product from '../components/Product'

export default function ProductsLoaded({data}) {
    const [message, setMessage] = useState("")
    const [sortedProducts, setSortedProducts] = useState(data)

    const LowToHighHandler = () => {
        const tempData = [...sortedProducts]
        setSortedProducts(tempData.sort((a, b) => {
            return a.price - b.price
        }))
        setMessage("Sort: Low -> High by price")
    }

    const HightoLowHandler = () => {
        const tempData = [...sortedProducts]
        setSortedProducts(tempData.sort((a, b) => {
            return b.price - a.price
        }))
        setMessage("Sort: High -> Low by price")
    }

    const ReviewWiseHandler = () => {
        const tempData = [...sortedProducts]
        setSortedProducts(tempData.sort((a, b) => {
            return b.rating - a.rating
        }))
        setMessage("Sort: High -> Low by ratings")
    }

    return (
        <div>
            <div className="row">
                    <div className="d-flex flex-row-reverse align-items-center">
                        
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Sort By
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#" onSelect={LowToHighHandler}>
                                    Price (Low to High)
                                </Dropdown.Item>
                                <Dropdown.Item href="#" onSelect={HightoLowHandler}>
                                    Price (High to Low)
                                </Dropdown.Item>
                                <Dropdown.Item href="#" onSelect={ReviewWiseHandler}>
                                    Customer Rating
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    
                    {message !== "" && (
                        <div className="mr-auto"><span className="fw-bold">{message}</span></div>
                    )}
                    
                    </div>
                    
                    {sortedProducts.map(product => {
                        return(
                            <div key={product._id} className="col-6 col-md-4 fine">
                                <Product product={product} />
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}
