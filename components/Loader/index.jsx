import styles from "./Loader.module.scss";
import { words } from "./data";

const Loader = () => {
  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader__progressWrapper}>
        <div className={styles.loader__progress}></div>
        <span className={styles.loader__progressNumber}>0</span>
      </div>

      <div className={styles.loader}>
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup}>
            {words.map((word, i) => (
              <span key={i} className={styles.loader__word}>
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
