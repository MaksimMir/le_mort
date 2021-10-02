import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="col">
                    <div className="header-top">
                        <p className="header__text-smal" >Лучшие астрологи и экстрасенсы Румынии</p>
                        <div className="header__line"></div>
                        <p className="header__text-big">Точность прогноза: 97%</p>
                    </div>
                    <div className="header-banner col">
                        <div className="bunner__img"></div>
                        <div className="bunner__text">
                            Вас беспокоит вопрос о том,                             
                            <p className="bunner__text-upper">
                                когда Вы покинете этот Мир и при каких обстоятельствах?
                            </p>
                        </div>
                        <div className="bunner__btns col">
                            <Link className="btn btn-gold" to="/cards">Да</Link>
                            <Link className="btn btn-gold">Нет</Link>
                        </div>
                        <p className="header__text-smal">Онлайн предсказание</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;