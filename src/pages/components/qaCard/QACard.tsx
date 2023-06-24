import React from "react";
import styles from "./qaCard.module.css";
import { QuestionDto } from "../../../app/interfaces";
import Link from "next/link";

interface IQaCardProps {
  question: QuestionDto;
}

const QACard = ({ question }: IQaCardProps) => {
  return (
    <Link
    href={{
      pathname: "/qa",
      query: {
        questionId: question.id
      }
    }}
      className={`${styles.container} bgcolor__light-theme card__shadow`}
    >
      <div className={styles.upperSection}>
        <p>{question.title}</p>
      </div>
      <div className={styles.lowerSection}>
        <p>View answers</p>
        <div className={styles.underline} />
      </div>
      <div className={styles.overlay} />
    </Link>
  );
};

export default QACard;
