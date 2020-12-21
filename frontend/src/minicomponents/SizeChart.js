import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default function SizeChart() {
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
                    <Modal.Title>
                        <i className="fas fa-ruler-vertical"></i> Size chart
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="text-center my-2 mb-4">
                        All measurements are in Inches
                    </h5>
                    
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
