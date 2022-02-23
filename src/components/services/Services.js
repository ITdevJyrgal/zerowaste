import React from 'react';
import Dates from "./Dates"

const Services = () => {
    return (
        <div className="services">
            <div className="flex items-center ">
                <div className="services-general__width"/>
                <h1 className="services-general__title">НАШИ УСЛУГИ</h1>
                <div className="services-general__width"/>
            </div>
            <div className="container">
                <div className="services-general">
                    {
                        Dates.map(el => (
                            <div className="services-general__block">
                                <img src={el.img} alt="img" className="services-general__block__img"/>
                                <p className="services-general__block__item">{el.item}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;