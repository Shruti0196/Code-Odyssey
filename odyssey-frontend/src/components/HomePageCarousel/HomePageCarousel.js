import './HomePageCarousel.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import carouselImage1 from '../../Assets/carouselImage1.jpg';
import carouselImage2 from '../../Assets/carouselImage2.jpg';
import carouselImage3 from '../../Assets/carouselImage3.jpg';
import carouselImage4 from '../../Assets/carouselImage4.jpg';
import {Container, Row, Col, Card} from 'react-bootstrap';

export default function HomePageCarousel()
{
    const SliderImages = [
        {image:carouselImage1,
        id:1},
        {image:carouselImage2,
        id:2},
        {image:carouselImage3,
        id:3},
        {image:carouselImage4,
        id:4}
    ]
    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
              {  
            breakpoint: 960,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            },
          },
        ],
      };
    return(
        <Container className='carousel-grid'>
            <Row>
                <Col>
        <Carousel className="carousel-container">
          {SliderImages.map((slide,_) => {
             return(
                <Carousel.Item interval={2000} key={slide.id}>
                <img
                  className="image"
                  src={slide.image}
                  alt="slide"
                />
                <Carousel.Caption>
                  <p className="caption"><b>hello okay we are team nekoma making a website thank you</b></p>
                </Carousel.Caption>
              </Carousel.Item>
             );
          })}
        </Carousel>
        </Col>
        </Row>
        </Container>
        
        
    );
}