import styles from './Description.module.css';


function Description() {
  return (
    <div>
      <h1 className={styles.headerDescription}>Sip Happens Café</h1>
      <p className={styles.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}

export default Description;
