import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-general">
                    <div>
                        <h1 className="footer-general__title" >ZeroWaste</h1>
                        <p className="footer-general__item" >Zero Waste (или «Ноль отходов») — это общественное движение, главная цель которого насколько
                            возможно уменьшить количество отходов. </p>
                    </div>
                    <div>
                        <h1 className="footer-general__title2">Меню</h1>
                        <p className="footer-general__item2" >Главная</p>
                        <p className="footer-general__item2" >О нас</p>
                        <p className="footer-general__item2" >Услуги</p>
                    </div>
                    <div>
                        <h1 className="footer-general__title2">Контакты</h1>
                        <div>
                           <div className="footer-general__icon " >
                               <i class="fas  fa-phone"/>
                           </div>
                            <div className="flex flex-col ">
                                <a href="tel:0550 01 22 08" className="footer-general__item2" >0550 01 22 08</a>
                                <a href="tel:0777 32 95 46" className="footer-general__item2" >0777 32 95 46</a>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h1  className="footer-general__title2">Социальные сети</h1>
                        <div className="flex">
                           <div className="footer-general__icons" >
                               <i class="fab fa-whatsapp"/>
                           </div>
                           <div className="footer-general__icons" >
                               <i className="fab fa-instagram"/>
                           </div>
                           <div className="footer-general__icons" >
                               <i class="fab fa-telegram"/>
                           </div>
                           <div className="footer-general__icons" >
                               <i className="fab fa-youtube"/>
                           </div>
                           <div className="footer-general__icons" >
                               <i className="fab fa-facebook"/>
                           </div>
                        </div>
                    </div>
                    <div className="footer-general__width"/>
                        <h1 className="text-1xl text-white">©2018-2021 “ZeroWaste”Все права защищены</h1>

                </div>
            </div>

        </div>
    );
};

export default Footer;