import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <div className="container">
                    <div className="hero-general">
                        <h1 className="hero-general__title text-center">“ZERO WASTE” всегда заботится <br/>о
                            комфорте своих
                            клиентов</h1>
                        <p className="hero-general__item text-center">ВСЕГДА В НОГУ СО ВРЕМЕНЕМ</p>
                    </div>
                    <div className="grid gap-x-8 gap-y-4 grid-cols-3  text-center">
                        <div className="">
                            <h1 className="hero-general__items" >Улучшенная
                                <br/>защита</h1>

                        </div>
                        <div className="">
                           <h1 className="hero-general__items" > Обновленный
                               <br/>корпус</h1>
                            <div className="hero-general__block" />

                        </div>

                        <div className="">
                          <h1 className="hero-general__items" >  Абсолютная
                              <br/>герметичность</h1>
                            <div className="hero-general__block" />

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;