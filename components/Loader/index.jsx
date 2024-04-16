import styles from "./Loader.module.scss";
import { words } from "./data";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { collapseWords, introAnimation, progressAnimation } from "./animations";

const Loader = ({ timeline }) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordsGroupRef = useRef(null);

  useEffect(() => {
    timeline &&
      timeline
        .add(introAnimation(wordsGroupRef))
        .add(progressAnimation(progressRef, progressNumberRef), 0)
        .add(collapseWords(loaderRef), "-=1");
  }, [timeline]);

  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader__progressWrapper}>
        <div className={styles.loader__progress} ref={progressRef}></div>
        <span className={styles.loader__progressNumber} ref={progressNumberRef}>
          0
        </span>
      </div>

      <div className={styles.loader} ref={loaderRef}>
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordsGroupRef}>
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
