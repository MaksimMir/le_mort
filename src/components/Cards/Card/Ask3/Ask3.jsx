import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAskValue } from './ask3.action';

const day = ['Да', 'Нет', 'Иногда']

const Ask3 = () => {
    const dispatch = useDispatch()
    const handlerAsk = (el) => {
        dispatch(setAskValue(el));
    }
    return (
        <div className="card__item col">
            <div className="card__item-top">
            <p>
            Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!
            </p>
            </div>
            <div className="card__item-content container col">
                <p className="card__item-title">
                Снятся ли Вам умершие люди?
                </p>
                <div className="card__item-btns col">
                    {day.map((el, i) => {
                        return (
                            <Link 
                            key={i} 
                            className="btn btn-gold" 
                            to="/cards/5"
                            onClick={() => handlerAsk(el)}
                            >{ el }</Link>
                        )
                    })}
                </div>
                <p className="footer__ask">Вопрос 4-5</p>
            </div>
        </div>
    )
}

export default Ask3;