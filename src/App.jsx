import { useEffect, useState } from 'react'
import "./App.css";
import Description from "./components/Description/Description"
import Options from "./components/Options/Options"
import Notification from './components/Notification/Notification';
import Feedback from "./components/Feedback/Feedback"


function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercent =
    Math.round((feedback.good / totalFeedback) * 100) || 0;

  
  return (
    <section>
      <Description message="Please leave your feedback about our service by selecting one of the options below." />
      <Options
        onFeedback={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedbackPercent={positiveFeedbackPercent}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </section>
  );
}



export default App
