import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Alert from 'react-bootstrap/Alert'
import Moment from 'react-moment';
import 'moment-timezone';

export default function Step({Paid, Processed, Delivered, order}) {
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

                        <div className="my-5">
                            {order && order.information && (
                                <Alert variant="primary">
                                    <strong>Message: </strong>{order.information}
                                </Alert>
                            )}
                            <div className="my-1"></div>
                            {order && order.processedAt && (
                                <Alert variant="warning">
                                    Processed At <Moment fromNow>{order.processedAt}</Moment> (<Moment format="hh:mm:ss - DD/MM/YYYY">{ order.processedAt }</Moment>)
                                </Alert>
                            )}
                            <div className="my-1"></div>
                            {order && order.deliveredAt && (
                                <Alert variant="success">
                                    Delivered At <Moment fromNow>{order.deliveredAt}</Moment> (<Moment format="hh:mm:ss - DD/MM/YYYY">{ order.deliveredAt }</Moment>)
                                </Alert>
                            )}
                        </div>
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
