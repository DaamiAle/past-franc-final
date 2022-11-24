import React from "react";
import { Container,Row,Col } from "react-bootstrap";

const Modal = () => {
    const handleClose = () => {
        document.getElementById("modal-container").style.display = "none";
        document.getElementById("img-modal").src = "";
    }

    return (
        <>
            <Container id="modal-container">
                <Row id="modal">
                    <Col className="col-12 btn-container"><p id="btn-close-modal" onClick={()=>handleClose()}>X</p></Col>
                    <Col className="col-12"><img id="img-modal" src="" alt=""/></Col>
                </Row>
            </Container>
        </>
    );
}

export default Modal;