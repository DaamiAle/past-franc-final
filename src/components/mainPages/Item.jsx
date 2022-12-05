import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./css/Item.css";

const Item = ({ item }) => {
    const { imagen, nombre, descripcion, precio } = item;
    const [cantidad, setCantidad] = useState(1);
    const [carrito, setCarrito] = useState([item]);

    const agregarAlcarrito = () => {
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        if (carrito === null) {
            carrito = [];
        }
        for (let i = 0; i < cantidad; i++) {
            carrito.push(item);
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
        setCarrito(carrito);
    };

    const verificarValor = (e) => {
        if (parseInt(e.target.value) < 1) {
            e.target.value = 1;
        }
        setCantidad(parseInt(e.target.value));
    };

    return (
        <>
            <Container className="item">
                <Row className="item-imagen"><img src={imagen ? imagen : "https://via.placeholder.com/70"} alt={nombre} /></Row>
                <Row className="item-nombre"><p>{nombre}</p></Row>
                <Row className="item-descri"><p>{descripcion}</p></Row>
                <Row className="item-precio"><p>{localStorage.getItem("formatoUSD") === "true" ? "USD " + precio / localStorage.getItem("dolar") : "$ " + precio}</p></Row>
                <Row className="item-boton" ><input type="number" id="cantidad" onChange={verificarValor} defaultValue="1"/> <p className="btn btn-agregar" onClick={agregarAlcarrito}>Agregar al carrito </p></Row>
            </Container>
        </>
    )
};

export default Item;