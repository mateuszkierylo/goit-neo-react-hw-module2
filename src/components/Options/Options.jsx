import PropTypes from "prop-types";
import styles from "./Options.module.css";

function Options({ options, total, updateFeedback, resetFeedback }) {
  return (
    <div className={styles.wrraper}>
      {Object.keys(options).map((option) => (
        <button
          className={styles.btn}
          key={option}
          onClick={() => updateFeedback(option)}
        >
          {option}
        </button>
      ))}
      {total > 0 && (
        <button className={styles.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

Options.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  updateFeedback: PropTypes.func.isRequired,
  resetFeedback: PropTypes.func.isRequired,
};

export default Options;
