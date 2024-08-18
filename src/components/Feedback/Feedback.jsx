import styles from "./Feedback.module.css";

export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
  positiveFeedbackPercentage,
}) {
  return (
    <ul className={styles.feedbackList}>
      <li className={styles.feedbackItem}>Good: {good}</li>
      <li className={styles.feedbackItem}>Neutral: {neutral}</li>
      <li className={styles.feedbackItem}>Bad: {bad}</li>
      <li className={styles.feedbackItem}>Total: {totalFeedback}</li>
      <li className={styles.feedbackItemPositive}>
        Positive: {positiveFeedbackPercentage}
      </li>
    </ul>
  );
}
