import React, { useState } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavDropdown , Navbar,Container, Nav , Form , FormControl , Button} from 'react-bootstrap';
import Image from '../Movietime.svg.png';

function Header ({setData}) {
  const [search, setSearch] = useState('');

  const submitHandler  = e => {
    if(search.length>0){
      
      e.preventDefault();
      fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`).then(
        response => response.json()
        ).then(value => {
          setData(value.Search);
        })
      }else {
        alert("please type something")
      }
}
  return (
    <div className='coco'>
  <Navbar bg="#80cbc4
  "expand="lg">
  <Container fluid>
    <Navbar.Brand ><img src={Image} alt="image" width="100px" height="50px"
    /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1"style={{color:"white"}} ><b>Home</b></Nav.Link>
        <Nav.Link href="#action2" style={{color:"white"}}><b>TV Shows</b></Nav.Link>
        <NavDropdown title="Movies" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">English</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Hindi</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Bengali</NavDropdown.Item>
          <NavDropdown.Item href="#action6">Malayalam</NavDropdown.Item>
          <NavDropdown.Item href="#action7">Tamil</NavDropdown.Item>
          <NavDropdown.Item href="#action8">Marathi</NavDropdown.Item>
          <NavDropdown.Item href="#action9">Kannada</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action10"  style={{color:"white"}}><b>Kids</b></Nav.Link>

          {/* <NavDropdown /> */}
          {/* <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item> */}
       
        {/* <Nav.Link href="#">
          Link 
        </Nav.Link> */}
      </Nav>
      <Form className="d-flex">
        <FormControl
        onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success"
        onClick={submitHandler}
        >Search</Button>
        <Nav.Link  href="#action2" style={{color:"black",fontWeight:"bolded",marginLeft:"5PX", border:"1px solid green",backgroundColor:"lightblue", borderRadius:"5px"}}>Login</Nav.Link>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
); 
}
export  default Header