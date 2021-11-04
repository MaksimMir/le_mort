import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDate } from './ask2.action';
import { days, month, years } from './userDate';

const Ask2 = () => {

    const [ day, setDay ] = useState('');
    const [ mon, setMon ] = useState('');
    const [ year, setYear ] = useState('');
    const [ dayErr, setDayErr ] = useState(false);
    const [ monthErr, setMonthErr ] = useState(false);
    const [ yearErr, setYearErr ] = useState(false);
    const [ validate, setValidate ] = useState(false);
    const dispatch = useDispatch();

    const handlerDays = evt => {
        setDay(evt.target.value);
        setDayErr(false)
    }

    const handlerMonths = evt => {
        setMon(evt.target.value)
        setMonthErr(false)
    }

    const handlerYears = evt => {
        setYear(evt.target.value)
        setYearErr(false)
    }

    const handlerBlur = evt => {
        switch (evt.target.name) {
            case 'days':
                if (day === '') {
                    setDayErr(true) 
                }
                break;
            case 'months':
                if (mon === '') {
                    setMonthErr(true)
                }
                break;
            case 'years':
                if (year === '') {
                    setYearErr(true)
                }
                break;
            default:
                break;
        }
    }

    const handlerDate = () => {
        const monthNumber = month.indexOf(mon) + 1;
        const birthday = new Date(`${year}-${monthNumber}-${day}`).getFullYear()
        const now = new Date().getFullYear();
        const age = now - birthday;

        const date = {
            age,
            dob: `${year}-${monthNumber}-${day}`
        }

        dispatch(setDate(date));
    }

    useEffect(() => {
        if (dayErr || monthErr|| yearErr) {
            setValidate(true);
        } else {
            setValidate(false);
        }
    }, [dayErr, monthErr, yearErr])

    return (
        <div className="card__item col">
            <div className="card__item-top">
            <p>
            Уже совсем скоро Вы узнаете много интересного о своем будущем!
            </p>
            </div>
            <div className="card__item-content container col">
                <p className="card__item-title">
                Укажите свою дату рождения:
                </p>
                <div className="card__item-btns col">
                    <select className={`card__item-input ${dayErr ? "err" : ""}`}
                        name="days"
                        value={day}
                        onChange={handlerDays}
                        onBlur={handlerBlur}>
                            <option label="Day"></option>
                            {days.map((item, i) => {
                                return (
                                    <option 
                                    key={i} 
                                    >{item}</option>
                                )
                            })}
                    </select>
                    <select className={`card__item-input ${monthErr ? 'err' : ''}`}
                        name="months"
                        value={mon}
                        onChange={handlerMonths}
                        onBlur={handlerBlur}>
                            <option label="Month"></option>
                            {month.map((item, i) => {
                                return (
                                    <option 
                                    key={i} 
                                    >{item}</option>
                                )
                            })}                           
                    </select>
                    <select className={`card__item-input ${yearErr ? 'err' : ''}`}
                        name="years"
                        value={year}
                        onChange={handlerYears}
                        onBlur={handlerBlur}>
                            <option label="Year"></option>
                            {years.map((item, i) => {
                                return (
                                    <option 
                                    key={i} 
                                    >{item}</option>
                                )
                            })}                           
                    </select>
                    { !validate &&
                    <Link 
                    className="btn btn-gold" 
                    to="/cards/4"
                    onClick={handlerDate}
                    >Далее</Link>}
                </div>
                <p className="footer__ask">Вопрос 3-5</p>
            </div>
        </div>
    )
}

export default Ask2;