import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Product from '../components/Product'
import ComingSoon from '../components/ComingSoon'

export default function ProductsLoaded({data, isDress}) {
    const [message, setMessage] = useState("")
    const [sortedProducts, setSortedProducts] = useState(data)

    const LowToHighHandler = () => {
        const tempData = [...data]
        setSortedProducts(tempData.sort((a, b) => {
            return a.price - b.price
        }))
        setMessage("Sort: Low -> High by price")
    }

    const HightoLowHandler = () => {
        const tempData = [...data]
        setSortedProducts(tempData.sort((a, b) => {
            return b.price - a.price
        }))
        setMessage("Sort: High -> Low by price")
    }

    const ReviewWiseHandler = () => {
        const tempData = [...data]
        setSortedProducts(tempData.sort((a, b) => {
            return b.rating - a.rating
        }))
        setMessage("Sort: High -> Low by ratings")
    }

    const DiscountHandler = () => {
        const tempData = [...data]
        setSortedProducts(tempData.sort((a, b) => {
            return Number(b.actualPrice - b.price) - Number(a.actualPrice - a.price)
        }))
        setMessage("Sort: High -> Low by Discount")
    }

    const BoyHandler = () => {
        const tempData = [...data]
        setSortedProducts(tempData.filter((each) => (each.dressType === "Boys")))
    }

    const GirlHandler = () => {
        const tempData = [...data]
        setSortedProducts(tempData.filter((each) => (each.dressType === "Girls")))
    }

    const MenHandler = () => {
        const tempData = [...data]
        setSortedProducts(tempData.filter((each) => (each.dressType === "Men")))
    }

    const WomenHandler = () => {
        const tempData = [...data]
        setSortedProducts(tempData.filter((each) => (each.dressType === "Women")))
    }

    return (
        <div>
            <div className="row">
                    {sortedProducts.length !== 0 && 
                    <>
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
                                <Dropdown.Item href="#" onSelect={DiscountHandler}>
                                    Discount
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {message !== "" && (
                            <div className="mr-auto"><span className="fw-bold">{message}</span></div>
                        )}
                    </div>
                    
                    <div className="my-2">
                        {
                        isDress &&
                        (<Dropdown className='float-right' >
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Shop by Group
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#" onSelect={MenHandler}>
                                    Men
                                </Dropdown.Item>
                                <Dropdown.Item href="#" onSelect={WomenHandler}>
                                    Women
                                </Dropdown.Item>
                                <Dropdown.Item href="#" onSelect={BoyHandler}>
                                    Boy
                                </Dropdown.Item>
                                <Dropdown.Item href="#" onSelect={GirlHandler}>
                                    Girl
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>)}
                    </div>
                    </>
                    }

                    {sortedProducts.length === 0 ? <ComingSoon />
                    : sortedProducts.map(product => {
                        return(
                            <div key={product._id} className="col-6 col-md-3 fine">
                                <Product product={product} />
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}
