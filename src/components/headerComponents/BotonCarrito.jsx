import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

const BotonCarrito = () => {
    const [cantidad, setCantidad] = useState(0);
    const irAlCarrito = () => {
        window.location.href = "/Carrito";
    };
    useEffect(() => {
        let carritoLS = JSON.parse(localStorage.getItem("carrito"));
        if (carritoLS === null) {
            carritoLS = [];
        }
        setCantidad(carritoLS.length);
    }, []);

    const handleChange = ()=> { 
        localStorage.setItem("formatoUSD", localStorage.getItem("formatoUSD") === "true" ? "false" : "true");
        window.location.reload();
    };

    return (
        <>
            <Container>
                <Row className="btn-carrito btn" onClick={irAlCarrito}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/pasteleria-franccesca.appspot.com/o/iconos%2Fcarrito-icono.png?alt=media&token=ebf5f3a0-c445-4f97-8ce1-20b7b7a0a57e" alt="carrito" width={36} />
                    <p id="car-cantidad">{cantidad}</p>
                </Row>
                <Row className="btn-usd">{
                    localStorage.getItem("formatoUSD") === "true" ?
                        <p className="btn" onClick={handleChange} style={{opacity:1}}>USD</p>
                        :
                        <p className="btn" onClick={handleChange} style={{opacity:0.3}}>USD</p>
                }</Row>

            </Container>
        </>
    );
}

export default BotonCarrito;