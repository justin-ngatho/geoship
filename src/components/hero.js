import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}> 
      <Carousel.Item>
        <img className='img-hero' src='/Images/hero 2.webp'/>
      </Carousel.Item>
      <Carousel.Item>
      <img className='img-hero' src='/Images/hero 3.webp'/>
      </Carousel.Item>
      <Carousel.Item>
      <img className='img-hero' src='/Images/hero 4.webp'/>
      </Carousel.Item>
    </Carousel>
    <div className='box'>
        <h1 className='hero-h1'>LIVE OUTSIDE THE BOX</h1>

        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>   
    </Form>
    <Button className='btn-sign-up'>Sign-up</Button>
      </div>

    </div>
    
  );
}

export default ControlledCarousel;