import styles from "./Feedback.module.css";

export default function Feedback({ children }) {
  return <div className={styles.feedback}>{children}</div>;
}

// export default Feedback;
