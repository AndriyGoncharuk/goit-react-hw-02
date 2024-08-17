import styles from "./Feedback.module.css";

const Feedback = ({ children }) => {
  return <div className={styles.feedback}>{children}</div>;
};

export default Feedback;
