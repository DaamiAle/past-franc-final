import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Item from "./Item";

//import Firebase from "../../firebase-config";
//import "firebase/compat/firestore";



const Chocolateria = () => {


    const [items, setItems] = useState([
        { cod: 0, nombre: "1/4 Kilogramo",  imagen:"https://firebasestorage.googleapis.com/v0/b/pasteleria-franccesca.appspot.com/o/choco%2Fbombones-cuarto.jpg?alt=media&token=7e340cd1-4e4d-46ea-93ec-9d2e9452a4df",  precio: 1500, descripcion:"Cuarto de kilo de bombones artesanales rellenos y macizos. Chocolates: Blanco, Semiamargo, C/leche, Frutilla, Limon, Menta, Naranja. Rellenos: Banana, Mousse Chocolate, Bon o Bon, Cafe, Frutilla, Menta, D.D. Leche" },
        { cod: 1, nombre: "1/2 Kilogramo",  imagen:"https://firebasestorage.googleapis.com/v0/b/pasteleria-franccesca.appspot.com/o/choco%2Fbombones-medio.jpg?alt=media&token=43491682-1c96-4eaa-aa79-0b267bf2a33f",   precio: 2700, descripcion:"Medio kilo de bombones artesanales rellenos y macizos. Chocolates: Blanco, Semiamargo, C/leche, Frutilla, Limon, Menta, Naranja. Rellenos: Banana, Mousse Chocolate, Bon o Bon, Cafe, Frutilla, Menta, D.D. Leche" },
        { cod: 2, nombre: "1 Kilogramo",    imagen:"https://firebasestorage.googleapis.com/v0/b/pasteleria-franccesca.appspot.com/o/choco%2Fbombones-kilo.jpg?alt=media&token=bd92c2f5-16e3-4739-b3fc-f9b95d5be4f0",    precio: 4500, descripcion:"Kilo de bombones artesanales rellenos y macizos. Chocolates: Blanco, Semiamargo, C/leche, Frutilla, Limon, Menta, Naranja. Rellenos: Banana, Mousse Chocolate, Bon o Bon, Cafe, Frutilla, Menta, D.D. Leche" },
        { cod: 3, nombre: "Formula 1",      imagen:"https://firebasestorage.googleapis.com/v0/b/pasteleria-franccesca.appspot.com/o/choco%2Fformula-1.jpg?alt=media&token=e8f88d2c-49f5-4411-b18a-6526bd2dfd1f",        precio: 3400, descripcion:"Figura auto de Formula 1, rellena de Dulce de leche" },
        { cod: 4, nombre: "Joystick",       imagen:"https://firebasestorage.googleapis.com/v0/b/pasteleria-franccesca.appspot.com/o/choco%2Fjoystick.jpg?alt=media&token=536e9314-157c-4e0f-b2cf-fe5d1e6dc43e",         precio: 1700, descripcion:"Figura Joystick, rellena de Dulce de leche" },
        { cod: 5, nombre: "Mate",           imagen:"https://firebasestorage.googleapis.com/v0/b/pasteleria-franccesca.appspot.com/o/choco%2Fmate.jpg?alt=media&token=3a99699e-29c9-41ca-acc9-e0bc1347970e",             precio: 1700, descripcion:"Figura Mate, rellena de Dulce de leche" },
        { cod: 6, nombre: "Alhajero Flores",imagen:"https://firebasestorage.googleapis.com/v0/b/pasteleria-franccesca.appspot.com/o/choco%2Falhajero-flores.jpg?alt=media&token=6388ae49-99af-4487-9374-61504ef321ee",  precio: 1500, descripcion:"Alhajero de chocolate con decoracion de flores, relleno de corazones de chocolate." },
        { cod: 7, nombre: "Chocomensaje",   imagen:"https://firebasestorage.googleapis.com/v0/b/pasteleria-franccesca.appspot.com/o/choco%2Fchocomensaje.jpg?alt=media&token=cf81d371-583e-4516-b5f9-98b6d111fd19",     precio: 2000, descripcion:"Chocomensaje hasta 24 letras" },
        { cod: 8, nombre: "Mesa de Pool",   imagen:"https://firebasestorage.googleapis.com/v0/b/pasteleria-franccesca.appspot.com/o/choco%2Fmesa-pool.jpg?alt=media&token=ad16adf3-71f0-4ec8-a14b-61000e0f7c64",        precio: 2400, descripcion:"Figura Mesa de Pool, rellena de Dulce de leche" },
        { cod: 9, nombre: "Ramo 3 Rosas",   imagen:"https://firebasestorage.googleapis.com/v0/b/pasteleria-franccesca.appspot.com/o/choco%2Frosas.jpg?alt=media&token=2304be14-cf59-440e-a06a-2c8ab2aa81c6",            precio: 600,  descripcion:"Ramo de 3 rosas con colores a elección." }
    ]);
    /*
    const enviarAFirebase = () => {
        const db = Firebase.firestore();
        const collection = db.collection("choco");
        items.forEach((item) => {
            console.log(item);
            collection.add(item);
        });

    useEffect(() => {
        const db = Firebase.firestore();
        const collection = db.collection("choco");
        const query = collection.get();
        query.then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("No results!");
            }
            setItems(querySnapshot.docs.map(doc => doc.data()));
        });
    }, []);
        const db = Firebase.firestore();
        const collection = db.collection("choco");
        collection.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                setItems([...items, doc.data()]);

            });
        });
    }, []);
    */
    



    return (
        <>
            <Container>
                <Row><p className="titulo-sec">Chocolateria</p></Row>
                <Row className="items">
                    {items.map((item) => <Item key={item.cod} item={item} />)}
                </Row>
            </Container>
        </>
    );
}

export default Chocolateria;