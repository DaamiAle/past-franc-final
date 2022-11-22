import './App.css';
import './Desktop.css';
import './Tablet.css';
import './Mobile.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Container, Row } from 'react-bootstrap';


function App() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('modal-container');
            if (modal.style.display !== 'none') {
                modal.style.display = 'none';
            }
        }
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
