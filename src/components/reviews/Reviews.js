import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    const settings = {
        // dots: false,
        // infinite: true,
        // speed: 1000,
        // slidesToShow: 2,
        // arrows: false,
        // autoplay: true,
        // autoplaySpeed: 4000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
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
                            <div className="reviews-general__block">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet expedita nostrum
                                quibusdam quisquam? Accusamus alias animi aperiam commodi consectetur dolor esse eveniet
                                fugit id itaque iusto labore laboriosam laborum magni, maxime minus molestiae nisi nulla
                                praesentium provident quaerat quibusdam quis quo repellat repudiandae saepe, sapiente
                                sint soluta suscipit tenetur unde, ut veritatis voluptatum? Accusamus aliquid animi
                                aperiam consequatur cum distinctio dolorem doloremque ducimus est facere fuga hic
                                incidunt ipsa, ipsam itaque magnam maiores minus, nihil nulla numquam obcaecati odio
                                officia pariatur perferendis praesentium provident quia quos reiciendis repellat soluta
                                tempore totam ullam voluptatum? Doloribus, est iusto quia sapiente totam voluptatibus.
                            </div>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>

                </div>
            </div>
    );

}



