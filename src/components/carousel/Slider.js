import React from 'react';
import Img1 from '../../images/fotos.jpg';
import Img2 from '../../images/fotos2.jpg';
import Img3 from '../../images/fotos3.jpg';
import Carousel from 'react-bootstrap/Carousel'
import './Slider.css';

function Slider(){
    return(
        <Carousel>
  <Carousel.Item className="carousel">
    <img
      className="d-block w-100"
      src={Img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Adote um melhor amigo!</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>O amor verdadeiro tem quatro patas, um focinho e um rabinho abanando de felicidade.</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Uma lambida vale mais que mil palavras</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Slider;