import Carousel from 'react-bootstrap/Carousel';
import React from "react";

function CarouselFade(props) {

    return (

        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Carousel/ImgCarousel2.jpg"
                    alt="фонд допомоги цивільним"
                />
                <Carousel.Caption>
                    <h3 className="carouselText" style={(!props.font)?{fontSize:"25px"}:{fontSize:"12px"}}>Допомога війсковим та цивільним</h3> {/*textShadow:"0 0 9px red"*/}
                    <p className="carouselText" style={(!props.font)?{fontSize:"20px"}:{fontSize:"8px"}}>Війна. Зруйновані міста й села, вбито тисячі невинних людей,
                        понівечено мільйони людських доль.Наша армія героїчно боронить Україну, а нам потрібно допомогти
                    у тилу нашим захисникам та людям, які втратили все через напад Росії.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src="/Carousel/ImgCarousel3.jpg"
                    alt="фонд допомоги війсковим"
                />

                <Carousel.Caption>
                    <h3 className="carouselText">Наші котики</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Carousel/ImgCarousel4.jpg"
                    alt="допомога зсу"
                />

                <Carousel.Caption>
                    <h3 className="carouselText">Підтримуйте ЗСУ</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Carousel/ImgCarousel5.jpg"
                    alt="допомогти зсу"
                />

                <Carousel.Caption>
                    <h3 className="carouselText">Разом до Перемоги!</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFade;