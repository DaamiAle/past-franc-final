import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Button from "./Button";


const Navegacion = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className="nav-bar"><Button texto="Inicio"/></Col>
                    <Col className="nav-bar"><Button texto="Galería"/></Col>
                    <Col className="nav-bar"><Button texto="Panadería"/></Col>
                    <Col className="nav-bar"><Button texto="Chocolatería"/></Col>
                    <Col className="nav-bar"><Button texto="Pastelería"/></Col>
                    <Col className="nav-bar"><Button texto="Contacto"/></Col>
                </Row>
            </Container>
        </>
    )
};

export default Navegacion;