import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Container, Row } from 'react-bootstrap';


function App() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById("modal").style.display = "none";
        }
    });
    if (!localStorage.getItem('carrito')) {
        localStorage.setItem('carrito', null);
    }
    if (!localStorage.getItem('formatoUSD')) {
        localStorage.setItem('formatoUSD', false);
    }
    fetch('https://api.bluelytics.com.ar/v2/latest')
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('dolar', data.blue.value_avg);
        });

    
    return (
        <>
            <Container id='body'>
                <Row><Header /></Row>
                <Row><Main /></Row>
                <Row><Footer /></Row>
            </Container>
        </>
    );
}

export default App;
