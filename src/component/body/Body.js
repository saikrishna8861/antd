 import React from 'react';
 import './Body.css';
 import {Carousel} from 'react-bootstrap';
 import Image from '../rio.jpg';
 import Image2 from '../insideout.jpg';
 import Image3 from '../av.jpg';
 import Image4 from '../zoo.jpg';
 import Image5 from '../tr.jpg';
 import Image6 from '../kf.jpg';
 import Image7 from '../thor.jpg';
 import Image8 from '../avengers.jpg';

 import 'bootstrap/dist/css/bootstrap.min.css';



 function Body () {
     return (
<Carousel variant="dark">
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100 "
      src={Image}
      href="#"
      alt="First slide"
      height="600px"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={1800}>
    <img
      className="d-block w-100 "
      src={Image2}
      href="#"
      alt="Second slide"
      height="600px"
    />
    
  </Carousel.Item>

  <Carousel.Item interval={1800}>
    <img
      className="d-block w-100 "
      src={Image3}
      href="#"
      alt="Third slide"
      height="600px"
    />
  
  </Carousel.Item>

  <Carousel.Item interval={1800}>
    <img
      className="d-block w-100 "
      src={Image4}
      href="#"
      alt="fourth slide"
      height="600px"
    />
   
  </Carousel.Item>

  <Carousel.Item interval={1800}>
    <img
      className="d-block w-100 "
      src={Image5}
      href="#"
      alt="fifth  slide"
      height="600px"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={1800}>
    <img
      className="d-block w-100 "
      src={Image6}
      href="#"
      alt="Third slide"
      height="600px"
    />
  
  </Carousel.Item>

  <Carousel.Item interval={1800}>
    <img
      className="d-block w-100 "
      src={Image7}
      href="#"
      alt="fourth slide"
      height="600px"
    />
   
  </Carousel.Item>

  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100 "
      src={Image8}
      href="#"
      alt="fourth slide"
      height="600px"
    />
   
  </Carousel.Item>
</Carousel>
);
 }

 export default Body