import React from "react";
import styles from "./qaCard.module.css";

const QACard = () => {
  return (
    <div className={`${styles.container} bgcolor__light-theme card__shadow`}>
      <div className={styles.upperSection}>
        <p>
          How to proof for x + 2 being equals to 2 + x using commtative rule in
          mathematics?
        </p>
      </div>
      <div className={styles.lowerSection}>
        <p>2 Answers</p>
        <div className={styles.underline}/>
      </div>
      <div className={styles.overlay}/>
    </div>
  );
};

export default QACard;
