import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navegacion from "./headerComponents/Navegacion"
import BotonCarrito from "./headerComponents/BotonCarrito"
import "./css/Header.css";


const Header = () => {
    return (
        <>
            <Container id="header">
                <Row><p id="titulo-principal">Pastelería Franccesca</p></Row>
                <Row className="nav-bar">
                    <Col className="header-car"><BotonCarrito/></Col>
                    <Col className="header-nav"><Navegacion/></Col>
                </Row>
            </Container>
        </>
    );
}

export default Header;