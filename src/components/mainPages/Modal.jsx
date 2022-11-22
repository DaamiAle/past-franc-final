import React, { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
/*
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    
    return (
        <div className={showHideClassName}>
        <section className="modal-main">
            {children}
            <button onClick={handleClose}>close</button>
        </section>
        </div>
    );
}
*/

const Modal = () => {
    const handleClose = () => {
        document.getElementById("modal-container").style.display = "none";
        document.getElementById("img-modal").src = "";
    }

    return (
        <>
            <Container id="modal-container">
                <Row id="modal">
                    <Col className="col-11"><img id="img-modal" src="" alt=""/></Col>
                    <Col className="col-1"><p id="btn-close-modal" onClick={()=>handleClose()}>X</p></Col>
                </Row>
            </Container>
        </>
    );
}


export default Modal;