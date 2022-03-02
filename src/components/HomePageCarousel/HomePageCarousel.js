import './HomePageCarousel.css';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import carouselImage1 from '../../Assets/carouselImage1.jpg';
import carouselImage2 from '../../Assets/carouselImage2.jpg';
import carouselImage3 from '../../Assets/carouselImage3.jpg';
import carouselImage4 from '../../Assets/carouselImage4.jpg';
import {Container, Row, Col} from 'react-bootstrap';

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
                  <p className="caption"><h1 style={{color:"#fb3b30"}}>Old age is not a disease  it is strength</h1></p>
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