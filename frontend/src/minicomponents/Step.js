import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Step({Paid, Processed, Delivered}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const currentStatus = Delivered ? 100 : Processed ? 45 : Paid ? 10 : 0
    return (
        <div>
            <Button variant="light" onClick={handleShow}>
                View
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Order Status
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column">
                        <div className="d-flex statusbar">
                            <p 
                            className={Paid ? "text-info fw-bolder d-flex align-items-center" : "text-danger d-flex align-items-center"}>
                                Paid {Paid ? <i className="ml-2 far fa-check-circle"></i> : <i className="ml-2 far fa-times-circle"></i>}
                            </p>
                            <p 
                            className={Processed ? "text-primary fw-bolder d-flex align-items-center" : "text-danger d-flex align-items-center"}>
                                Processed {Processed ? <i className="ml-2 far fa-check-circle"></i> : <i className="ml-2 far fa-times-circle"></i>}
                            </p>
                            <p
                            className={Delivered ? "text-success fw-bolder d-flex align-items-center" : "text-danger d-flex align-items-center"}>
                                Delivered {Delivered ? <i className="ml-2 far fa-check-circle"></i> : <i className="ml-2 far fa-times-circle"></i>}
                            </p>
                        </div>
                        <ProgressBar 
                        variant={Delivered ? "success" : "primary"}
                        animated now={Paid ? currentStatus : 5} />
                    </div>
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
