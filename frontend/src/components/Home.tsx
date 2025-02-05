import './Home.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home: React.FC = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
                <Container>
                    <Navbar.Brand href="/">Expense Tracker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#Add Friends">Add Friends</Nav.Link>
                            <Nav.Link href="#Add Expense">Add Expense</Nav.Link>
                            <Nav.Link href="#Login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section className="home-body">
                <div className="home-exp">
                    <ul className="exp-list">
                        <li className="exp-card-li">
                            <div className="exp-card">
                                <div className="exp-date"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Home;
