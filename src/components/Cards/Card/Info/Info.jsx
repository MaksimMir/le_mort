import UserData from '../../../UserData/UserData';
import Spinner from '../../../Spinner/Spinner';
import './Info.scss';
import { useEffect, useState } from 'react';

const Info = () => {
    const [ data, setData ] = useState();
    const [ isShow, setIsShow ] = useState(false);

    const handlerInfo = () => {
        setIsShow(true);
        fetch('https://swapi.dev/api/people/1/')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('address not found');
                }
            })
            .then(data => {
                setData(data)
            })
        }

    useEffect(() => {
        setIsShow(false)
    }, [data])

    if (isShow) {
        return <Spinner />
    }

    return (
        <div className="info col">
            <div className="card__item-info">
            Спасибо за Ваши ответы!
                <p>
                    <b>Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.</b>
                </p>
            </div>
            <p className="info__text">
                Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем. 
            </p>
            <div className="info__block">
                <p className="info__block-bigtext">
                Первое значимое событие может произойти уже 14.02.2021,  
                <span className="info__block-smalltext">
                    Вам надо быть готовым, что бы последствия не оказались необратимыми. 
                </span>
                </p>
            </div>
            <p className="info__text">
            Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию!
            </p>    
            <button 
            className="btn btn-green" 
            onClick={() => handlerInfo()}
            >Позвонить и прослушать</button>

            {data && 
                <UserData data={data} />
            }

            <p className="info__footer">
            TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, 
            </p>
            
        </div>
    )
}

export default Info;