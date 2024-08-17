import styles from "./Options.module.css";

const Options = ({
  options,
  onLeaveFeedback,
  onResetFeedback,
  hasFeedback,
}) => {
  return (
    <div className={styles.options}>
      {options.map((option) => (
        <button
          key={option}
          className={styles.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
      {hasFeedback && (
        <button className={styles.resetButton} onClick={onResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
