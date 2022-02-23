import React from 'react';


import bay from "./../../assets/img/bay.jpg"
import bas from "./../../assets/img/bas.jpg"

import treh from "./../../assets/img/treh.jpg"
import hai from "./../../assets/img/hai.jpg"

import xag from "./../../assets/img/xag.jpg"
import drag from "./../../assets/img/drag.jpg"
import pod from "./../../assets/img/pod.svg"


const Our = () => {
    return (
        <div className="our">

            <div className="our-general">
                <div className="container2">
                    <div className="flex items-center ">
                        <div className="our-general__width"/>
                        <h1 className="our-general__title">НАШИ РАБОТЫ</h1>
                        <div className="our-general__width"/>
                    </div>
                    <div className="our-general__block">
                        <div className="our-general__block__square">
                            <img src={bas} alt="img" className="our-general__block__img"/>
                            <span className="our-general__block__gen">
                                <p>Трехэтажный загородный коттедж с плоской крышей</p>
                                <img src={pod} alt="" className="our-general__block__pod"/>
                            </span>
                        </div>

                        <div className="our-general__block__square">
                            <img src={bay} alt="img" className="our-general__block__img2"/>
                            <span>
                                <p className="our-general__block__gen2">Хай-тек в Дранишниках</p>
                                <img src={pod} alt="img" className="our-general__block__pod2"/>
                            </span>
                        </div>

                        <div className="our-general__block__square">
                            <img src={treh} alt="img" className="our-general__block__img"/>
                            <span className="our-general__block__gen">
                                <p className="our-general__block__gen">Трехэтажный загородный коттедж с плоской крышей</p>
                                <img src={pod} alt="" className="our-general__block__pod"/>
                            </span>
                        </div>

                        <div className="our-general__block__square">
                            <img src={hai} alt="img" className="our-general__block__img2"/>
                            <span>
                                <p className="our-general__block__gen2">Хай-тек в Дранишниках</p>
                                <img src={pod} alt="img" className="our-general__block__pod2"/>
                            </span>
                        </div>


                        <div className="our-general__block__square">
                            <img src={xag} alt="img" className="our-general__block__img"/>
                            <span className="our-general__block__gen">
                                <p className="our-general__block__gen">Трехэтажный загородный коттедж с плоской крышей</p>
                                <img src={pod} alt="" className="our-general__block__pod"/>
                            </span>
                        </div>

                        <div className="our-general__block__square">
                            <img src={drag} alt="img" className="our-general__block__img2"/>
                            <span>
                                <p className="our-general__block__gen2">Хай-тек в Дранишниках</p>
                                <img src={pod} alt="img" className="our-general__block__pod2"/>
                            </span>
                        </div>
                    </div>
                    <div className="our-general__btn">
                        <button className="our-general__btn__btns">Смотреть все</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Our;