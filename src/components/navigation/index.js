import React from 'react';
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../../assets/images/logo/logo.png';

export default function NavigationHeader() {
  return (
    <>
      <div className='container' >
        <div className='site-brand'>
          <Link to='/'>
            <img src={logo} alt='brand logo' height='100px' />
          </Link>
          <span>
            <i></i>
          </span>
        </div>
      </div>
      <Navbar bg="white" className='header-border'>
        <Container className="justify-content-center">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
