import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "./Button";


const Navegacion = () => {
    return (
        <>
            <Col className="bar-btn"><Button texto="Inicio"/></Col>
            <Col className="bar-btn"><Button texto="Galería"/></Col>
            <Col className="bar-btn"><Button texto="Panadería"/></Col>
            <Col className="bar-btn"><Button texto="Chocolatería"/></Col>
            <Col className="bar-btn"><Button texto="Pastelería"/></Col>
            <Col className="bar-btn"><Button texto="Contacto"/></Col>
        </>
    )
};

export default Navegacion;