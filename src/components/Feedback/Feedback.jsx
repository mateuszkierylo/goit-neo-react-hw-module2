import PropTypes from "prop-types";

import styles from "./Feedback.module.css";

function Feedback({ options, total, positiveFeedback }) {
  return (
    <ul>
      {Object.keys(options).map((option) => (
        <li className={styles.item} key={option}>
          {option}: {options[option]}
        </li>
      ))}
      <li className={styles.item} key="total">
        total: {total}
      </li>
      <li className={styles.item} key="positive">
        positive: {positiveFeedback}%
      </li>
    </ul>
  );
}

Feedback.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Feedback;
