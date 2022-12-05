import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Carrito.css";

const Carrito = () => {

    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")) || []);

    const eliminarDelCarrito = (cod) => {
        let carritoLS = JSON.parse(localStorage.getItem("carrito"));
        let i = 0;
        while (i < carritoLS.length) {
            if (carritoLS[i].cod === cod) {
                carritoLS.splice(i, 1);
                i = carritoLS.length;
            }
            i++;
        }
        localStorage.setItem("carrito", JSON.stringify(carritoLS));
        setCarrito(carritoLS);
    };

    const comprarCarrito = () => {
        if (carrito.length > 0) {
            localStorage.removeItem("carrito");
            setCarrito([]);
            alert("Compra realizada con éxito");
        } else {
            alert("No hay productos en el carrito");
        }
    };
    return (
        <>
            <Container id="carrito">
                <Row><p className="titulo-sec">Carrito</p></Row>
                <Row>
                {
                    carrito.length === 0 ? <p className="subtitulo">No hay productos en el carrito</p> : carrito && carrito.reduce((acumulador, item) => {
                        const { cod } = item;
                        const itemEncontrado = acumulador.find((item) => item.cod === cod);
                        if (itemEncontrado) {
                            itemEncontrado.cantidad++;
                        } else {
                            acumulador.push({ ...item, cantidad: 1 });
                        }
                        return acumulador;
                    }, []).map((item) => {
                        const { cod, imagen, nombre, descripcion, precio, cantidad } = item;
                        let precioUSD = parseFloat((precio / localStorage.getItem("dolar")));
                        return (
                            <Row className="item-carrito">
                                <Row><p className="simple-text">{nombre} {'('}{localStorage.getItem("formatoUSD") === "true" ?  "USD " + precioUSD.toFixed(3) : "$ " + precio } x {cantidad}{")"}</p></Row>
                                <Row className="item-carrito-precio">
                                    <p className="simple-text text-izq">Subtotal: </p>
                                    <p className="simple-text text-der">{localStorage.getItem("formatoUSD") === "true" ? "USD " + (precioUSD * cantidad).toFixed(3) : "$ " + (precio * cantidad)}</p>
                                </Row>
                                <Row className="btn-eliminar"><p onClick={() => eliminarDelCarrito(cod)} className="btn btn.eliminar">Eliminar 1 unidad</p></Row>
                            </Row>
                        )
                    })}
                </Row>
                <br/>
                <Row>
                    <Row>
                        <Row id="total-product">
                            <p className="simple-text text-izq">Productos en carrito:</p>
                            <p className="simple-text text-der">{carrito.length}</p>
                        </Row>
                        <Row id="total-carrito">
                            <p className="simple-text text-izq">Total:</p>
                            <p className="simple-text text-der">{localStorage.getItem("formatoUSD") === "true" ?  "USD " + parseFloat((carrito.reduce((a, b) => a + b.precio, 0)) / localStorage.getItem("dolar")).toFixed(3) : "$ " + (carrito.reduce((a, b) => a + b.precio, 0))}</p>
                        </Row>
                    </Row>
                </Row>
                <Row id="btn-comprar"><p className="btn" onClick={comprarCarrito}>Comprar</p></Row>
            </Container>
        </>
    );
};

export default Carrito;