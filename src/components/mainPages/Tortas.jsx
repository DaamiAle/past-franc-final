import React from "react";
import { Container, Row } from "react-bootstrap";
import "./css/Item.css";

const Tortas = ({ item }) => {
    const { imagen, nombre, descripcion, precio } = item;
    return (
        <>
            <Container className="item">
                <Row className="item-imagen"><img src={imagen ? imagen : "https://via.placeholder.com/70"} alt={nombre} /></Row>
                <Row className="item-nombre"><p>{nombre}</p></Row>
                <Row className="item-descri"><p>{descripcion}</p></Row>
            </Container>
        </>
    )
};

export default Tortas;