import Carousel from 'react-bootstrap/Carousel';
import React from "react";

function CarouselFade() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Carousel/ImgCarousel2.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 style={{color:"white", textShadow:"0 0 9px red"}}>Допомога цивільним, жертвам нападу Росії на Україну</h3>
                    <p style={{color:"white", textShadow:"0 0 9px red"}}>Війна. Зруйновані міста й села, сплюндрована українська земля, вбито тисячі невинних людей,
                        понівечено мільйони людських доль.Наша армія героїчно захищає Україну, а нам потрібно допомогти
                    у тилу людям, які втратили все через напад Росії.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src="/Carousel/ImgCarousel3.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Carousel/ImgCarousel4.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Carousel/ImgCarousel5.jpg"
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFade;