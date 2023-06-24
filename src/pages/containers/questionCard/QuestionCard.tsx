import React from "react";
import styles from "./questionCard.module.css";
import { QuestionDto } from "../../../app/interfaces";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface IAnswerCardProps {
  question?: QuestionDto;
  onAnswerClick?: (value: boolean) => void;
}

const AnswerCard = ({ question, onAnswerClick }: IAnswerCardProps) => {
  const svgCode = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ffa500" d="M48.4,-60.7C56.4,-50.9,52.3,-29.7,44.3,-16.5C36.3,-3.3,24.4,2,18.9,10.4C13.4,18.8,14.4,30.5,6.9,44.1C-0.5,57.7,-16.4,73.2,-30.1,72.6C-43.8,72,-55.3,55.3,-65.1,37.8C-74.9,20.3,-83,2.1,-82,-16.4C-81,-34.9,-70.9,-53.6,-55.7,-62.1C-40.5,-70.6,-20.3,-68.7,0,-68.7C20.2,-68.6,40.4,-70.4,48.4,-60.7Z" transform="translate(100 100)" />
  </svg>`;

  function formatDate(date: Date): string {
    const currentDate = new Date();

    if (isNaN(date.getTime())) {
      return "Invalid date";
    }

    const timeDiff = currentDate.getTime() - date.getTime();

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `Asked ${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `Asked ${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `Asked ${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `Asked ${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `Asked ${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return `Asked ${seconds} second${seconds !== 1 ? "s" : ""} ago`;
    }
  }

  const formattedDateQuestion = formatDate(new Date(question?.creationTime));

  return (
    <div className={styles.container}>
      <div className={styles.emptySpacer} />
      <div className={styles.columnContainer}>
        <div className={`${styles.subContainer} bgcolor__light-theme`}>
          <div className={styles.cornerBadge}>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              dangerouslySetInnerHTML={{ __html: svgCode }}
            />
            <p className={styles.bubbleText}>Q</p>
          </div>
          <div className={styles.questionContainer}>
            <div className={styles.topContainer}>
              <p>{question?.personName}</p>
              <p>{formattedDateQuestion}</p>
              <div className={styles.line} />
            </div>
            <div className={styles.questionContent}>
              <p className={styles.title}>{question?.title}</p>
            </div>
            <div className={styles.textContent}>
              <ReactQuill
                className={styles.bodyInput}
                theme="bubble"
                value={question?.text}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className={styles.answerButton}>
          <p
            onClick={() => {
              if (onAnswerClick) onAnswerClick(true);
            }}
          >
            Answer
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
