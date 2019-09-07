import React from 'react'
import slider from '../Slider/img/slider.jpg'
import slider2 from '../Slider/img/slider2.jpg'
import slider3 from '../Slider/img/slider01.png'


import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
"mdbreact";

const CarouselPage = () => {
  return (
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
               style={{height: '350px', backgroundSize: 'center', backgroundPosition: 'cover'}}
                className="d-block w-100"
                src={slider}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
               style={{height: '350px', backgroundSize: 'center', backgroundPosition: 'cover'}}
                className="d-block w-100"
                src={slider2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
               style={{height: '350px', backgroundSize: 'center', backgroundPosition: 'cover'}}
                className="d-block w-100"
                src={slider3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  );
}

export default CarouselPage;

