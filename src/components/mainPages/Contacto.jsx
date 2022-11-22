import React, { useState } from "react";
import { Form } from "react-bootstrap";


const Contacto = () => {
    // al clickear el boton enviar, se ejecuta la funcion handleSubmit

    const [formu, setFormu] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const { nombre, email, mensaje } = formu;
        
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            nombre: nombre,
            email: email,
            mensaje: mensaje
        }
        console.log(data);
    };

    const handleChange = (e) => {
        console.log("cambio");
        setFormu({
            [e.target.name]: e.target.value
        });
    };
    return (
        <>
            <p className="titulo-sec">Contacto</p>
            <p className="simple-text"> Aqui podras enviarnos tus consultas, solicitar presupuestos, etc.</p>
            <Form className="rounded border border-dark p-3">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su email" name="email" value={email} onChange= {handleChange} />
                    <Form.Text className="text-muted">
                        Nosotros no compartiremos su correo electrónico.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" name="nombre" value={nombre} onChange= {handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Ingrese su mensaje o consulta" name="mensaje" value={mensaje} onChange= {handleChange} />
                </Form.Group>
                <br/>
                <div class="g-recaptcha" data-sitekey="TU CLAVE DEL SITIO AQUÍ" data-callback="correctCaptcha"></div>
                <br/>
                <Form.Group controlId="formBasicSubmit">
                    <Form.Control type="submit" value="Enviar" className="btn btn-primary" onClick={handleSubmit} />
                </Form.Group>
            </Form>
        </>
    );
}


// importamos la api recaptcha desde https://www.google.com/recaptcha/api.js
/*


const Contacto = () => {
    return (
        <>
        </>
    );
}
*/
export default Contacto;