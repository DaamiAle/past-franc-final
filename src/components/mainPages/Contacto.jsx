import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";


const Contacto = () => {
    
    const [recaptcha, setRecaptcha] = useState(true);
    
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });
    const { nombre, email, mensaje } = form;

    const onChangeRecaptcha = (value) => {
        if (value) {
            setRecaptcha(true);
        }
    };
    
    const handleChange = (e) => {
        if (e.target.name === "nombre") {
            setForm({...form, [e.target.name]: e.target.value });
            // verificamos que el nombre tenga al menos 5 caracteres y no más de 15, sin numeros ni caracteres especiales excepto espacios
            const regex = /^[a-zA-ZÀ-ÿ\s]{5,15}$/;
            const nombreValido = regex.test(e.target.value);
            if (nombreValido) {
                e.target.classList.remove("is-invalid");
                e.target.classList.add("is-valid");
            } else {
                e.target.classList.remove("is-valid");
                e.target.classList.add("is-invalid");
            }
        }
        if (e.target.name === "email") {
            setForm({...form, [e.target.name]: e.target.value });
            // verificamos que el email tenga un formato válido
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            const emailValido = regex.test(e.target.value);
            if (emailValido) {
                e.target.classList.remove("is-invalid");
                e.target.classList.add("is-valid");
            } else {
                e.target.classList.remove("is-valid");
                e.target.classList.add("is-invalid");
            }
        }
        if (e.target.name === "mensaje") {
            setForm({...form, [e.target.name]: e.target.value });
            // verificamos que el mensaje tenga al menos 20 caracteres y no más de 300
            const regex = /^.{20,300}$/;
            const mensajeValido = regex.test(e.target.value);
            if (mensajeValido) {
                e.target.classList.remove("is-invalid");
                e.target.classList.add("is-valid");
            } else {
                e.target.classList.remove("is-valid");
                e.target.classList.add("is-invalid");
            }
        }
    };

    const marcarCamposInvalidos = () => {
        if (nombre.length === 0) {
            document.getElementById("formBasicName").classList.add("is-invalid");
        }
        if (email.length === 0) {
            document.getElementById("formBasicEmail").classList.add("is-invalid");
        }
        if (mensaje.length === 0) {
            document.getElementById("formBasicMessage").classList.add("is-invalid");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (recaptcha) {
            if (nombre !== '' && email !== "" && mensaje !== "") {
                console.log(form);
            }
            else {
                alert("Todos los campos son obligatorios");
                marcarCamposInvalidos();
            }
        }
        else {
            alert("Debes validar el reCaptcha");
        }

    };


    return (
        <>
            <h1 className="text-center">Contacto</h1>
            <Form className="rounded border border-dark p-3">
                <Form.Group controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Introduce tu nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Introduce tu email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Introduce tu mensaje"
                        name="mensaje"
                        value={mensaje}
                        onChange={handleChange}
                    />
                </Form.Group>
                <ReCAPTCHA
                    sitekey="6Ldb7SgjAAAAABh1QbLglwG1mwXb-cNLiBCwExi0"
                    onChange={onChangeRecaptcha}
                />
                <br/>
                <Form.Group controlId="formBasicSubmit">
                    <Form.Control 
                        type="submit" 
                        value="Enviar" 
                        className="btn btn-primary" 
                        onClick={handleSubmit} 
                    />
                </Form.Group>
            </Form>
        </>
    );
};
export default Contacto;