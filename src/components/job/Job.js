import React from 'react';
import Dates from './Dates'


const Job = () => {
    return (
        <div className="job">
            <div className="flex items-center ">
                <div className="job-general__width"/>
                <h1 className="job-general__title">ЭТАПЫ РАБОТЫ</h1>
                <div className="job-general__width"/>
            </div>
            <div className="container">
                <div className="job-general">
                    {
                        Dates.map(el => {
                            return (
                                <div className="job-general__block">
                                    <img src={el.img} alt="img"/>
                                    <p className="job-general__block__item"> {el.item}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Job;