import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RedesSociales from "./footerComponents/RedesSociales";
import "./css/Footer.css";

const Footer = () => {

    const goTo = (e) => {
        window.location.pathname = e.target.id;
    };

    return (
        <>
            <Container id="footer">
                <Row id="footer-cont">
                    <Col className="map">
                        <iframe id="mapa" title="mapa-hurl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105096.01894166374!2d-58.79027054601402!3d-34.597824317530076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb949d75545b1%3A0x2dd2b2fe831fecce!2sHurlingham%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1668893188664!5m2!1ses!2sar"></iframe>
                    </Col>
                    <Col className="no-map">
                        <Col className="footer-nav">
                            <Row id="navi-links">
                                <p className="footer-titulo-sec">Navegación</p>
                                <p id="Inicio" className="btn" onClick={goTo}>Inicio</p>
                                <p id="Galería" className="btn" onClick={goTo}>Galería</p>
                                <p id="Panadería" className="btn" onClick={goTo}>Panadería</p>
                                <p id="Chocolatería" className="btn" onClick={goTo}>Chocolatería</p>
                                <p id="Pastelería" className="btn" onClick={goTo}>Pastelería</p>
                                <p id="Contacto" className="btn" onClick={goTo}>Contacto</p>
                            </Row>
                        </Col>
                        <Col className="footer-contacto">
                            <Row id="contacto">
                                <p className="footer-titulo-sec">Contáctanos:</p>
                                <p>Telefonos:</p>
                                <p>11-59262339 / 11-62595238</p>
                                <p>Email: <a href="mailto: pasteleriafranccesca@gmail.com">pasteleriafranccesca</a></p>
                                <p>Horarios de atención:</p>
                                <p>Lunes a Sábado: 10:00 a 20:00</p>
                            </Row>
                            <Row id="redes-sociales"><RedesSociales/></Row>
                        </Col>
                    </Col>
                </Row>
                <Row id="footer-copyr"><p>Daamiale &copy;  2022 - Pastelería Franccesca</p></Row>
            </Container>
        </>
    );
}

export default Footer;