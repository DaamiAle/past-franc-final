import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RedesSociales from "./footerComponents/RedesSociales";

const Footer = () => {

    const goToHeader = (e) => {
        window.location.pathname = e.target.id;
    };

    return (
        <>
            <Container id="footer">
                <Row id="footer-cont">
                    <Col className="col-6">
                        <iframe id="mapa" title="mapa-hurl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105096.01894166374!2d-58.79027054601402!3d-34.597824317530076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb949d75545b1%3A0x2dd2b2fe831fecce!2sHurlingham%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1668893188664!5m2!1ses!2sar" width="600" height="200"></iframe>
                    </Col>
                    <Col className="col-6 no-map">
                        <Col className="col-4">
                            <Row id="navi-links">
                                <p className="titulo-sec">Navegación</p>
                                <p id="Inicio" className="nav-link simple-text" type="button" onClick={goToHeader}>Inicio</p>
                                <p id="Galería" className="nav-link simple-text" type="button" onClick={goToHeader}>Galería</p>
                                <p id="Panadería" className="nav-link simple-text" type="button" onClick={goToHeader}>Panadería</p>
                                <p id="Chocolatería" className="nav-link simple-text" type="button" onClick={goToHeader}>Chocolatería</p>
                                <p id="Pastelería" className="nav-link simple-text" type="button" onClick={goToHeader}>Pastelería</p>
                                <p id="Contacto" className="nav-link simple-text" type="button" onClick={goToHeader}>Contacto</p>
                            </Row>
                        </Col>
                        <Col className="col-8 contacto">
                            <Row id="cont">
                                <p className="titulo-sec">Contáctanos:</p>
                                <p className="simple-text">Telefonos:</p>
                                <p className="simple-text">11-59262339 / 11-62595238</p>
                                <p className="simple-text">Email: <a href="mailto: pasteleriafranccesca@gmail.com">pasteleriafranccesca</a></p>
                                <p className="simple-text">Horarios de atención:</p>
                                <p className="simple-text">Lunes a Sábado: 10:00 a 20:00</p>
                            </Row>
                            <Row><Col id="redes"><RedesSociales/></Col></Row>
                        </Col>
                    </Col>
                </Row>
                <Row id="copyr"><p>Copyright &copy; DaamiAle</p></Row>
            </Container>
        </>
    );
}

export default Footer;