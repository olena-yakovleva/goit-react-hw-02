import style from "./Options.module.css";
const Options = ({ onFeedback, onReset, totalFeedback }) => {
    return (
        <div className={style.wrapper}>
            <button className={style.button} type="button" onClick={() => onFeedback("good")}>Good</button>
            <button className={style.button} type="button" onClick={() => onFeedback("neutral")}>Neutral</button>
            <button className={style.button} type="button" onClick={() => onFeedback("bad")}>Bad</button>
            {totalFeedback > 0 && <button className={style.button} type="button" onClick={onReset}>Reset</button>}
        </div>
    );
}


export default Options