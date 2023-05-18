import axios from 'axios';
import React from 'react';
import {Nav, Navbar, NavDropdown,
  Container, Form, InputGroup} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
//import {LinkContainer} from 'react-router-bootstrap';
import logo from '../../assets/images/logo/penlagbe-logo.png';

export default function NavigationHeader() {
  //States
  const [searchShow, setSearchShow] = React.useState(false);
  
  //Function
  const handleSearch = () => {
    setSearchShow(!searchShow);
  };
  return (
    <>
      <div className='container' >
        <div className='row'>
          <div className='col-4 header-left'>
            <div>
              <PrimaryNavbar cid={'drawer-navbar'} header={false} />
            </div>
            
          </div>
          <div className='site-brand col-4'>
            <Link to='/'>
              <img src={logo} 
                alt='brand logo' className='logo-image'/>
            </Link>
          </div>
          <div className='col-4 header-right'>
            {searchShow ? 
              <InputGroup className='search-bar'>
                <Form.Control
                  placeholder="Search"
                />
                <InputGroup.Text onClick={handleSearch}>
                  <i className="fa-sharp fa-solid fa-xmark"></i>
                </InputGroup.Text>
              </InputGroup> : 
              <i onClick={handleSearch} 
                className="fa-sharp fa-solid fa-magnifying-glass"></i>}
            <i className="fa-sharp fa-solid fa-cart-shopping"
              style={{marginLeft: '12px'}}></i>
          </div>
          
        </div>
      </div>
      <div>
        <PrimaryNavbar cid={'header-navbar'} header={true} />
      </div>
    </>
  );
}

function PrimaryNavbar({cid, header}) {
  //States
  const [categories, setCategories] = React.useState([]);

  //Effects
  React.useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories').then(res => {
      if(res.status) {
        setCategories(res.data);
      }
    }).catch(err => console.log(err));
  }, []);

  return (
    <Navbar id={cid} bg="white" expand="lg" 
      className={header ? 'header-border' : ''}>
      <Container>
          
        <Navbar.Toggle aria-controls="nav-toggle" />
        <Navbar.Collapse 
          className="justify-content-center" 
          id="nav-toggle">
          <Nav className="justify-content-center">
            <NavDropdown title="Categories" id="categories-dropdown">
              {categories.length>0 && categories.map((cat, i) => (
                <LinkContainer key={i} to={`/categories/${cat}`}>
                  <NavDropdown.Item>
                    <span style={{textTransform: 'capitalize'}}>{cat}</span>
                  </NavDropdown.Item>
                </LinkContainer>
              ))}
            </NavDropdown>
            <Nav.Link href="#link">My Wishlist</Nav.Link>
            <Nav.Link href="#link">Compare</Nav.Link>
            <Nav.Link href="#link">My Account</Nav.Link>       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}