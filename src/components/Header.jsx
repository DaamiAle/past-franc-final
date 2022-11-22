import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navegacion from "./headerComponents/Navegacion"
import Carrito from "./headerComponents/Carrito"


const Header = () => {
    // 
    return (
        <>
            <Container id="header">
                <Row><br></br></Row>
                <Row><p id="titulo-principal">Pastelería Franccesca</p></Row>
                <Row className="nav-bar">
                    <Col className="col-11"><Navegacion/></Col>
                    <Col className="col-1"><Carrito/></Col>
                </Row>
            </Container>
        </>
    );
}

export default Header;