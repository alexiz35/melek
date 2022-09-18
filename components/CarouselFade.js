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
                    <h3 style={{color:"white", textShadow:"0 0 9px black"}}>Допомога війсковим та цивільним</h3> {/*textShadow:"0 0 9px red"*/}
                    <p style={{color:"white",textShadow:"0 0 9px black"}}>Війна. Зруйновані міста й села, вбито тисячі невинних людей,
                        понівечено мільйони людських доль.Наша армія героїчно боронить Україну, а нам потрібно допомогти
                    у тилу нашим захисникам та людям, які втратили все через напад Росії.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src="/Carousel/ImgCarousel3.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 style={{color:"white", textShadow:"0 0 9px black"}}>Наші котики</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Carousel/ImgCarousel4.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 style={{color:"white", textShadow:"0 0 9px black"}}>Підтримуйте ЗСУ</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Carousel/ImgCarousel5.jpg"
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                    <h3 style={{color:"white", textShadow:"0 0 9px black"}}>Разом до Перемоги!</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFade;