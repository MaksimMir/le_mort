import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">           
            <div className="container">
                <div className="col">
                    <h2 className="footer__title">Боитесь ли вы умереть?</h2>
                    <div className="footer__btns col">
                        <Link className="btn btn-gold" to="/cards">Да</Link>
                        <Link className="btn btn-gold">Нет</Link>
                        <p className="footer__ask">Вопрос 1-5</p>
                    </div>
                    <div className="footer__block">
                    Вы, конечно, умрете. 
                    И все, с кем вы знакомы, 
                    тоже однажды умрут.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;