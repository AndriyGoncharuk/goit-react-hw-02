import { useEffect, useState } from "react";

import Description from "../Description/Description.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Notification from "../Notification/Notifications.jsx";
import style from "./App.module.css";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (storedFeedback) {
      setFeedback(storedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = Math.round(
    (feedback.good / totalFeedback) * 100 || 0
  );

  return (
    <div className={style.wrapper}>
      <Description />
      <Options
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={updateFeedback}
        onResetFeedback={resetFeedback}
        hasFeedback={totalFeedback > 0}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
