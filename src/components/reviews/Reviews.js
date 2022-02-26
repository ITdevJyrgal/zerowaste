import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    const settings = {
        dots: false,
        arrows: false,
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
                    <div className="cursor-pointer">
                        <div
                            className="reviews-general__block relative  shadow hover:shadow-lg shadow-inner"
                            style={{
                                width: "413px",
                                height: "210px",
                                shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                            }}>
                            <h1 className="text-2xl p-3">Ryan Florence</h1>
                            <h6 className="text-black pl-3 ">Здравствуйте дороги читатели отзыва о каркасном бассейне
                                BestWay. Приобрели его совсем
                                недавно, и хочется поделится первыми впечатлениями от его обладания. Сборка бассейна
                                была сделана за тридцать минут вдвоем. Все детали сделаны так что можно его...</h6>
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <div
                            className="reviews-general__block relative  shadow hover:shadow-lg shadow-inner"
                            style={{
                                width: "413px",
                                height: "210px",
                                shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                            }}>
                            <h1 className="text-2xl p-3">Ryan Florence</h1>
                            <h6 className="text-black pl-3 ">Здравствуйте дороги читатели отзыва о каркасном бассейне
                                BestWay. Приобрели его совсем
                                недавно, и хочется поделится первыми впечатлениями от его обладания. Сборка бассейна
                                была сделана за тридцать минут вдвоем. Все детали сделаны так что можно его...</h6>
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <div
                            className="reviews-general__block relative  shadow hover:shadow-lg shadow-inner"
                            style={{
                                width: "413px",
                                height: "210px",
                                shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                            }}>
                            <h1 className="text-2xl p-3">Ryan Florence</h1>
                            <div className="flex items-center justify-center">
                                <iframe width="300" height="180" src="https://www.youtube.com/embed/PXGycbkbtW0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>

                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <div
                            className="reviews-general__block relative  shadow hover:shadow-lg shadow-inner"
                            style={{
                                width: "413px",
                                height: "210px",
                                shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                            }}>
                            <h1 className="text-2xl p-3">Ryan Florence</h1>
                            <h6 className="text-black pl-3 ">Здравствуйте дороги читатели отзыва о каркасном бассейне
                                BestWay. Приобрели его совсем
                                недавно, и хочется поделится первыми впечатлениями от его обладания. Сборка бассейна
                                была сделана за тридцать минут вдвоем. Все детали сделаны так что можно его...</h6>
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <div
                            className="reviews-general__block relative  shadow hover:shadow-lg shadow-inner"
                            style={{
                                width: "413px",
                                height: "210px",
                                shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                            }}>
                            <h1 className="text-2xl p-3">Ryan Florence</h1>
                            <h6 className="text-black pl-3 ">Здравствуйте дороги читатели отзыва о каркасном бассейне
                                BestWay. Приобрели его совсем
                                недавно, и хочется поделится первыми впечатлениями от его обладания. Сборка бассейна
                                была сделана за тридцать минут вдвоем. Все детали сделаны так что можно его...</h6>
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <div
                            className="reviews-general__block relative  shadow hover:shadow-lg shadow-inner"
                            style={{
                                width: "413px",
                                height: "210px",
                                shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                            }}>
                            <h1 className="text-2xl p-3">Ryan Florence</h1>
                            <div className="flex items-center justify-center">
                                <iframe width="300" height="180" src="https://www.youtube.com/embed/PXGycbkbtW0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>

                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <div
                            className="reviews-general__block relative  shadow hover:shadow-lg shadow-inner"
                            style={{
                                width: "413px",
                                height: "210px",
                                shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                            }}>
                            <h1 className="text-2xl p-3">Ryan Florence</h1>
                            <h6 className="text-black pl-3 ">Здравствуйте дороги читатели отзыва о каркасном бассейне
                                BestWay. Приобрели его совсем
                                недавно, и хочется поделится первыми впечатлениями от его обладания. Сборка бассейна
                                была сделана за тридцать минут вдвоем. Все детали сделаны так что можно его...</h6>
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <div
                            className="reviews-general__block relative  shadow hover:shadow-lg shadow-inner"
                            style={{
                                width: "413px",
                                height: "210px",
                                shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                            }}>
                            <h1 className="text-2xl p-3">Ryan Florence</h1>
                            <h6 className="text-black pl-3 ">Здравствуйте дороги читатели отзыва о каркасном бассейне
                                BestWay. Приобрели его совсем
                                недавно, и хочется поделится первыми впечатлениями от его обладания. Сборка бассейна
                                была сделана за тридцать минут вдвоем. Все детали сделаны так что можно его...</h6>
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <div
                            className="reviews-general__block relative  shadow hover:shadow-lg shadow-inner"
                            style={{
                                width: "413px",
                                height: "210px",
                                shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                            }}>
                            <h1 className="text-2xl p-3">Ryan Florence</h1>
                            <div className="flex items-center justify-center">
                                <iframe width="300" height="180" src="https://www.youtube.com/embed/PXGycbkbtW0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>

                        </div>
                    </div>
                </Slider>

            </div>
        </div>
    );

}



