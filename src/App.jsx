import { useState, useEffect } from "react";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

import "modern-normalize";
import "./App.css";

function App() {
  const [feedbackState, setFeedbackState] = useState(() => {
    const feedbackState = window.localStorage.getItem("savedFeedbackState");

    return feedbackState !== null
      ? JSON.parse(feedbackState)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem(
      "savedFeedbackState",
      JSON.stringify(feedbackState)
    );
  }, [feedbackState]);

  function updateFeedback(feedbackType) {
    setFeedbackState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  }

  function countTotalFeedback() {
    const { good, neutral, bad } = feedbackState;
    return good + neutral + bad;
  }

  function positiveFeedback() {
    const { good, neutral} = feedbackState;
    const total = countTotalFeedback();
    return total ? Math.round((good + neutral / total) * 100) : 0;
  }

  function resetFeedback() {
    setFeedbackState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <div className="wrapper">
      <Description />
      <Options
        options={feedbackState}
        updateFeedback={updateFeedback}
        total={countTotalFeedback()}
        resetFeedback={resetFeedback}
      />
      {countTotalFeedback() ? (
        <Feedback
          options={feedbackState}
          total={countTotalFeedback()}
          positiveFeedback={positiveFeedback()}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
