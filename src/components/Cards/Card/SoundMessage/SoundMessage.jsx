import './SoundMessage.scss';


const SoundMessage = () => {
    return (
        <div className="sound">
            <div className="sound__mic"></div>
            <div className="sound__bar"></div>
            <div className="sound__percent">20%</div>
            <p className="sound__text">Запись сообщения</p>
        </div>
    )
}

export default SoundMessage;