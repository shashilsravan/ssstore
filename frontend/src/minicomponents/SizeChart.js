import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import HeroTitle from '../minicomponents/HeroTitle';

export default function SizeChart({ dressType }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="mt-3">
            <Button variant="outline-primary" onClick={handleShow}>
                <i className="fas fa-ruler-horizontal"></i> Size chart
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-success">
                        <i className="fas fa-ruler-vertical mr-2"></i>
                        Size chart - {dressType === "Men" ? "Men" : dressType === "Women" ? "Women" : "Kids"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="text-center my-2 mb-4">
                        All measurements are in Inches
                    </h5>
                    
                    {dressType === "Men" ? 
                    (<>
                    <HeroTitle text="Full sleeves" />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Chest</th>
                                <th>Length</th>
                                <th>Sleeve Length</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>38 (S)</td>
                                <td>41"</td>
                                <td>30.5"</td>
                                <td>25"</td>
                            </tr>
                            <tr>
                                <td>40 (M)</td>
                                <td>42"</td>
                                <td>31"</td>
                                <td>25.5"</td>
                            </tr>
                            <tr>
                                <td>42 (L)</td>
                                <td>44"</td>
                                <td>31.5"</td>
                                <td>25.75"</td>
                            </tr>
                            <tr>
                                <td>44 (XL)</td>
                                <td>46"</td>
                                <td>32"</td>
                                <td>26"</td>
                            </tr>
                            <tr>
                                <td>46 (XXL)</td>
                                <td>48"</td>
                                <td>32.5"</td>
                                <td>26.25"</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <HeroTitle text="Half sleeves"/>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Chest</th>
                                <th>Length</th>
                                <th>Sleeve Length</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>38 (S)</td>
                                <td>40"</td>
                                <td>28"</td>
                                <td>7.5"</td>
                            </tr>
                            <tr>
                                <td>40 (M)</td>
                                <td>42"</td>
                                <td>29"</td>
                                <td>7.75"</td>
                            </tr>
                            <tr>
                                <td>42 (L)</td>
                                <td>44"</td>
                                <td>30"</td>
                                <td>8"</td>
                            </tr>
                            <tr>
                                <td>44 (XL)</td>
                                <td>46"</td>
                                <td>30.5"</td>
                                <td>8.25"</td>
                            </tr>
                            <tr>
                                <td>46 (XXL)</td>
                                <td>48"</td>
                                <td>32"</td>
                                <td>8.5"</td>
                            </tr>
                        </tbody>
                    </Table>
                    </>)
                    : dressType === "Women" ? 
                    (<>
                    <HeroTitle text="For Full sleeves" />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Bust</th>
                                <th>Length</th>
                                <th>Sleeve Length</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>S</td>
                                <td>35"</td>
                                <td>24"</td>
                                <td>23"</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>37"</td>
                                <td>25"</td>
                                <td>23.5"</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>39"</td>
                                <td>26"</td>
                                <td>24"</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>41"</td>
                                <td>27"</td>
                                <td>24.5"</td>
                            </tr>
                            <tr>
                                <td>XXL</td>
                                <td>43"</td>
                                <td>28"</td>
                                <td>25.5"</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <HeroTitle text="For Half sleeves" />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Bust</th>
                                <th>Length</th>
                                <th>Sleeve Length</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>S</td>
                                <td>35"</td>
                                <td>24"</td>
                                <td>5.5"</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>37"</td>
                                <td>25"</td>
                                <td>5.75"</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>39"</td>
                                <td>26"</td>
                                <td>6"</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>41"</td>
                                <td>27"</td>
                                <td>6.25"</td>
                            </tr>
                            <tr>
                                <td>XXL</td>
                                <td>43"</td>
                                <td>28"</td>
                                <td>6.5"</td>
                            </tr>
                        </tbody>
                    </Table> </>)
                    :
                    (<>
                    <HeroTitle text="Full sleeves" />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Chest</th>
                                <th>Length</th>
                                <th>Sleeve Length</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>(7-8Y) S</td>
                                <td>28"</td>
                                <td>20.5"</td>
                                <td>18"</td>
                            </tr>
                            <tr>
                                <td>(9-10Y) M</td>
                                <td>30"</td>
                                <td>21.5"</td>
                                <td>20.0"</td>
                            </tr>
                            <tr>
                                <td>(11-12Y) L</td>
                                <td>32"</td>
                                <td>23"</td>
                                <td>20.5"</td>
                            </tr>
                            <tr>
                                <td>(13-14Y)XL</td>
                                <td>34"</td>
                                <td>25"</td>
                                <td>22"</td>
                            </tr>
                            <tr>
                                <td>(15-16Y)XXL</td>
                                <td>36"</td>
                                <td>26"</td>
                                <td>23"</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <HeroTitle text="Half sleeves"/>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Chest</th>
                                <th>Length</th>
                                <th>Sleeve Length</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>(7-8Y) S</td>
                                <td>28"</td>
                                <td>20.5"</td>
                                <td>5.5"</td>
                            </tr>
                            <tr>
                                <td>(9-10Y) M</td>
                                <td>30"</td>
                                <td>21.5"</td>
                                <td>6.0"</td>
                            </tr>
                            <tr>
                                <td>(11-12Y) L</td>
                                <td>32"</td>
                                <td>23"</td>
                                <td>6.5"</td>
                            </tr>
                            <tr>
                                <td>(13-14Y)XL</td>
                                <td>34"</td>
                                <td>25"</td>
                                <td>6.8"</td>
                            </tr>
                            <tr>
                                <td>(15-16Y)XXL</td>
                                <td>36"</td>
                                <td>26"</td>
                                <td>7"</td>
                            </tr>
                        </tbody>
                    </Table>
                    </>)}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
