import React from 'react';
import image from './../../assets/img/image 25.png'

const About = () => {
    return (
        <div>
            <div className="about">
                <div className="flex items-center">
                    <div className="about-general__width"/>
                    <h1 className="about-general__title">НАША ПРОКДУКЦИЯ</h1>
                    <div className="about-general__width"/>
                </div>
                <div className="container">
                    <div className="about-general">


                        <div className="grid">
                            <div className="grid gap-x-8 gap-y-4 grid-cols-2">
                                <div>
                                    <h1 className="about-general__item"> ПОЛИПРОПИЛЕН - пластический материал,
                                        отличающийся высокой прочностью при ударе
                                        и многократном изгибе, износостойкостью , хорошими теплоизоляционными свойствами
                                        в широком диапазоне температур, высокой химической стойкостью, низкой паро - и
                                        газопроницаемостью. Стоек к кислотам, щелочам, растворам солей, минеральным и
                                        растительным маслам при высоких температурах.
                                    </h1>
                                    <h1 className="about-general__but">РЕИМУЩЕСТВА ИЗДЕЛИЙ ИЗ ПОЛИПРОПИЛЕНА:
                                        <span className="about-general__ser">
                                        <br/> 1. для изделий характерен длительный срок эксплуатации;
                                        <br/> 2. возможность сборки любых размеров внутри помещения;
                                        <br/> 3. легкость и простота монтажа;
                                        <br/> 4. идеальная герметичность готовых изделий;
                                        <br/> 5. высочайшая надежность;
                                        <br/> 6. возможность изготовления любой конфигурации и цветовой гаммы;
                                        <br/> 7. материалы пригодны для контакта с пищевыми продуктами.
                                        <br/> 8. Экологическая чистота.
                                    </span>
                                    </h1>
                                </div>
                                <div>
                                    <img src={image} alt="img" className="about-general__img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;