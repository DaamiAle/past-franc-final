import React from "react";
import { Container,Row } from "react-bootstrap";
import "./css/Modal.css"

const Modal = ({image}) => {
    const {imagen, nombre} = image;
    const cerrarModal = () => {
        document.getElementById("modal").style.display = "none";
    }
    return (
        <>
            <Container id="modal">
                <Row>
                    <Row className="modal-boton"><p className="btn" onClick={cerrarModal}>X</p></Row>
                    <Row className="modal-img"><img src={imagen ? imagen : "https://via.placeholder.com/70"} alt={nombre} /></Row>
                </Row>
            </Container>
        </>
    )
}





/*

    const handleClose = () => {
        document.getElementById("modal-container").style.display = "none";
        document.getElementById("img-modal").src = "";
    }

    return (
        <>
            <Container id="modal-container">
                <Row id="modal">
                    <Col className="col-1 btn-container"><p id="btn-close-modal btn" onClick={()=>handleClose()}>X</p></Col>
                    <Col className="col-10"><img id="img-modal" src="" alt=""/></Col>
                </Row>
            </Container>
        </>
    );*/

export default Modal;