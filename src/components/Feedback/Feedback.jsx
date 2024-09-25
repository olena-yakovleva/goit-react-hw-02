import style from "./Feedback.module.css";
const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercent }) => {
    return (
        <div className={style.wrapper}>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positiveFeedbackPercent}%</p>
        </div>
    );
};

export default Feedback