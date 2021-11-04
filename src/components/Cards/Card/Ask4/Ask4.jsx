import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const text = [
    'По вам скучает очень близкий человек, которого больше нет в мире живых.',
    'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.',
    'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.'
]

const Ask4 = () => {
    const [ message, setMessage ] = useState(text[0])
    const age = useSelector(state => state.date.age);

    useEffect(() => {
        if (age > 18 && age <= 35) {
            setMessage(text[0]);
        } else if(age >35 && age <= 45) {
            setMessage(text[1]);
        } else if(age > 45) {
            setMessage(text[2]);
        }
    }, [age])
    return (
        <div className="card__item col">
            <div className="card__item-top">
            <p className="card__item-info">
                {message}
            </p>
            </div>
            <div className="card__item-content container col">
                <p className="card__item-title">
                Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?
                </p>
                <div className="card__item-btns col">
                    <Link
                        className="btn btn-gold" 
                        to="/cards/sound"
                        >Да</Link>
                    <Link 
                        className="btn btn-gold" 
                        to="/cards/info"
                        >Затрудняюсь ответить</Link>
                </div>
                <p className="footer__ask">Вопрос 5-5</p>
            </div>
        </div>
    )
}

export default Ask4;