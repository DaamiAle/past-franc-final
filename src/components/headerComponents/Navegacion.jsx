import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Button from "./Button";


const Navegacion = () => {
    return (
        <>
            <Container>
                <Row className="nav-btns">
                    <Col className="bar-btn"><Button texto="Inicio"/></Col>
                    <Col className="bar-btn"><Button texto="Galería"/></Col>
                    <Col className="bar-btn"><Button texto="Panadería"/></Col>
                    <Col className="bar-btn"><Button texto="Chocolatería"/></Col>
                    <Col className="bar-btn"><Button texto="Pastelería"/></Col>
                    <Col className="bar-btn"><Button texto="Contacto"/></Col>
                </Row>
            </Container>
        </>
    )
};

export default Navegacion;