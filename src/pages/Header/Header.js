import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth'

const Header = () => {
    const {user, logOut} = useAuth();
    console.log(user);
    const signOut = () => {
        logOut();
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link ><Link to='/events'>Event</Link></Nav.Link>
                        <Nav.Link ><Link to='/registerData'>Register Data</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
                        <img style={{height: '40px'}} className='mx-3 rounded-circle' src={user?.photoURL} alt="" />
                        {
                            user?.email? <button onClick={signOut} className=" btn btn-danger">Logout</button>:
                            <Nav.Link ><button className="btn btn-danger"><Link to='/login'>Login</Link></button></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div>
        //     <Link to='/'>Home</Link>
        //     <Link to='/events'>Event</Link>
        // </div>
    );
};

export default Header;