import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Inicio from "./mainPages/Inicio";
import Panaderia from "./mainPages/Panaderia";
import Chocolateria from "./mainPages/Chocolateria";
import Pasteleria from "./mainPages/Pasteleria";
import Contacto from "./mainPages/Contacto";
import BuildingPage from "./mainPages/BuildingPage";
import GaleriaFotos from "./mainPages/GaleriaFotos";

const Main = () => {
    return (
        <>
            <Container id='main'>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/Galería" element={<GaleriaFotos/>} />
                    <Route path="/Panadería" element={<Panaderia />} />
                    <Route path="/Chocolatería" element={<Chocolateria />} />
                    <Route path="/Pastelería" element={<Pasteleria />} />
                    <Route path="/Contacto" element={<Contacto />} />
                    <Route path="*" element={<BuildingPage />} />
                </Routes>
            </Container>
        </>
    );
};

export default Main;