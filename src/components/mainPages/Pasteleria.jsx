import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "./Item";
import Tortas from "./Tortas";

const Pasteleria = () => {
    const [clasicos, setClasicos] = useState(true);
    const [itemsClasicos, setItemsClasicos] = useState([
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
    const [itemsPersonalizados, setItemsPersonalizados] = useState([
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
    const irAContacto = () => {
        window.location.href = "/Contacto";
    };

    return (
        <>
            <Container id="pasteleria">
                <Row>{ clasicos ? <p className="titulo-sec">Clásicos</p> : <><p className="titulo-sec">Personalizados</p><p className="simple-text" style={{marginBottom:"1%"}}>En esta seccion no podra agregar articulos al carrito ya que son muy variados los precios. Al ser personalizado debera pedir un presupuesto a travez de la seccion <span className="btn" onClick={irAContacto}>Contacto</span>. Muchas gracias.</p></> }</Row>
                <Row id="pasteleria-cont">
                    <Col id="pasteleria-menu">
                        <Row>
                            <p className="btn" onClick={() => setClasicos(true)}>C l á s i c o s</p>
                            <p className="btn" onClick={() => setClasicos(false)}>P e r s o n a l i z a d o s</p>
                        </Row>
                    </Col>
                    <Col id="pasteleria-items">
                        <Row className="items">{ clasicos ? itemsClasicos.map((item) => <Item key={item.cod} item={item} />) : itemsPersonalizados.map((item) => <Tortas key={item.cod} item={item} />) }</Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Pasteleria;