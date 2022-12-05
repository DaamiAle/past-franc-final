import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Item from "./Item";

const Panaderia = () => {
    const [items, setItems] = useState([
        { cod: 0, nombre: "",  imagen:"",  precio: 0, descripcion:"" },
        { cod: 1, nombre: "",  imagen:"",  precio: 0, descripcion:"" },
        { cod: 2, nombre: "",  imagen:"",  precio: 0, descripcion:"" },
        { cod: 3, nombre: "",  imagen:"",  precio: 0, descripcion:"" },
        { cod: 4, nombre: "",  imagen:"",  precio: 0, descripcion:"" },
        { cod: 5, nombre: "",  imagen:"",  precio: 0, descripcion:"" },
        { cod: 6, nombre: "",  imagen:"",  precio: 0, descripcion:"" },
        { cod: 7, nombre: "",  imagen:"",  precio: 0, descripcion:"" },
        { cod: 8, nombre: "",  imagen:"",  precio: 0, descripcion:"" },
        { cod: 9, nombre: "",  imagen:"",  precio: 0, descripcion:"" }
    ]);
    return (
        <>
            <Container>
                <Row><p className="titulo-sec">Panadería</p></Row>
                <Row className="items">
                    {items.map((item) => <Item key={item.cod} item={item} />)}
                </Row>
            </Container>
        </>
    );
}

export default Panaderia;