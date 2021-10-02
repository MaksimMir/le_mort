import './Content.scss';

const Content = () => {
    return (
        <div className="content">
            <div className="container">
            <div className="col">
                <div className="content-top">
                    <div className="content__text">
                    Позвольте нам раскрыть эту волнующую тайну и 
                    <p className="content__text-gold">
                        с точностью определить дату и время вашей смерти,
                    </p> 
                    а также предшествующую этому событию причину
                    </div>
                </div>
                <div className="content-bottom">
                    <div className="content__text">
                    Многие не верят предсказаниям и мы решили доказать каждому,
                        <p className="content__text-gold">
                        что прогноз может изменить жизнь любого человека!
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Content;