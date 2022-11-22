import React from "react";
import { Container } from "react-bootstrap";

const Inicio = () => {
    return (
        <>
            <Container>
            <p className="titulo-sec">Bienvenidos!</p>
            <p className="simple-text">En esta pagina podras encontrar informacion sobre los productos que ofrecemos en nuestra pastelería.</p>
            <p className="simple-text">Si deseas ver algun producto en especifico, puedes usar la barra de busqueda que se encuentra en la parte superior de la pagina.</p>

            <p className="titulo-sec">¿Quienes somos?</p>
            <p className="simple-text">Somos una pastelería que se dedica a la elaboracion de productos de panadería, chocolatería y pastelería.</p>
            <p className="simple-text">Contamos con una gran variedad de productos, desde tortas, tartas, galletas, chocolates, etc.</p>

            <p className="titulo-sec">¿Donde estamos?</p>
            <p className="simple-text">Nuestra pastelería se encuentra ubicada en la ciudad de Hurlingham, Provincia de Buenos Aires.</p>
            <p className="simple-text">Como es un negocio familiar, no contamos con un local a la calle, por lo que no tenemos un comercio fisico donde pueda visitarnos.</p>
            
            <p className="titulo-sec">¿Como contactarnos?</p>
            <p className="simple-text">Si deseas contactarnos, puedes hacerlo a traves de la seccion de contacto.</p>

            </Container>
        </>
    );
}

export default Inicio;