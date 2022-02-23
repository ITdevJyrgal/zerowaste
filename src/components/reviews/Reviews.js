import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    return (
        <div className="reviews">
            <div className="reviews-general">
                <div className="flex items-center ">
                    <div className="services-general__width"/>
                    <h1 className="services-general__title">ОТЗЫВЫ</h1>
                    <div className="services-general__width"/>
                </div>
                <Slider {...settings}>
                    <div>

                    </div>
                    <div>
                        <iframe width="300" height="150" src="https://www.youtube.com/embed/x-CooUcZ-RA"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </div>
                </Slider>
            </div>
        </div>
    );

}



