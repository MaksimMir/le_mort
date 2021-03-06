import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setValue } from './ask1.action';

const day = ['Утро', 'День', 'Вечер', 'Ночь']

const Ask1 = () => {

    const dispatch = useDispatch();

    const handlerDayTime = (el) => {
        dispatch(setValue(el))
    }
    return (
        <div className="card__item col">
            <div className="card__item-top">
            <p>
                Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.
            </p>
            </div>
            <div className="card__item-content container col">
                <p className="card__item-title">
                    Когда Вы чувствуете себя наиболее комфортно?
                </p>
                <div className="card__item-btns col">
                    {day.map((el, i) => {
                        return (
                            <Link 
                            key={i} 
                            className="btn btn-gold" 
                            to="/cards/3"
                            onClick={() => handlerDayTime(el)}
                            >{ el }</Link>
                        )
                    })}
                </div>
                <p className="footer__ask">Вопрос 2-5</p>
            </div>
        </div>
    )
}

export default Ask1;