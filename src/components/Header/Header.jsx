import './Header.scss';

const Header = () => {

    const scrollPage = () => {
        window.scrollBy({top: 400, behavior: 'smooth'})
    }

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
                            <button onClick={scrollPage} className="btn btn-gold">Да</button>
                            <button className="btn btn-gold">Нет</button>
                        </div>
                        <p className="header__text-smal">Онлайн предсказание</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;