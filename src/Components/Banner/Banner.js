import React from 'react';
import img1 from './../../Images/img1.jpeg'
import img2 from './../../Images/img2.jpg'
import img3 from './../../Images/img3.jpg'
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
        <Carousel>
<Carousel.Item>
<img
  className="d-block w-100 mh-25 slide"
  src={img1}
  alt="First slide"
/>
<Carousel.Caption>
  <h3>We have best Tourism Services For You.</h3>
  <p>You can get deatils of them in Service page.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  className="d-block w-100 slide"
  src={img2}
  alt="Second slide"
/>

<Carousel.Caption>
  <h1>Amazing tour in France</h1>
  <p>7 days 8 night Tour</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  className="d-block w-100 slide"
  src={img3}
  alt="Third slide"
/>

<Carousel.Caption >
<h1 bg="info" xs={12}>Amazing tour in Italy</h1>
  <p>7 days 8 night Tour</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
    </>
  
    );
};

export default Banner;