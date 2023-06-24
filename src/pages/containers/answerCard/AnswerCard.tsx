import React from "react";
import styles from "./answerCard.module.css";
import thumbUp from "../../../app/assets/thumbUp.png";
import thumbDown from "../../../app/assets/thumbDown.png";
import { AnswerDto } from "../../../app/interfaces";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface IAnswerCardProps {
  answer?: AnswerDto;
  onThumbUpClick?: (id: string) => void;
  onThumbDownClick?: (id: string) => void;
}

const AnswerCard = ({
  answer,
  onThumbUpClick,
  onThumbDownClick,
}: IAnswerCardProps) => {
  const svgCode = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path fill="#804e9f" d="M48.4,-60.7C56.4,-50.9,52.3,-29.7,44.3,-16.5C36.3,-3.3,24.4,2,18.9,10.4C13.4,18.8,14.4,30.5,6.9,44.1C-0.5,57.7,-16.4,73.2,-30.1,72.6C-43.8,72,-55.3,55.3,-65.1,37.8C-74.9,20.3,-83,2.1,-82,-16.4C-81,-34.9,-70.9,-53.6,-55.7,-62.1C-40.5,-70.6,-20.3,-68.7,0,-68.7C20.2,-68.6,40.4,-70.4,48.4,-60.7Z" transform="translate(100 100)" />
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
      return `Answered ${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `Answered ${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `Answered ${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `Answered ${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `Answered ${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return `Answered ${seconds} second${seconds !== 1 ? "s" : ""} ago`;
    }
  }

  const formattedDateQuestion = formatDate(new Date(answer?.creationTime));

  return (
    <div className={styles.container}>
      <div className={styles.rating}>
        <div className={styles.thumbIcon}>
          <img
            src={thumbUp.src}
            alt="thumb-up"
            onClick={() => {
              if (onThumbUpClick) onThumbUpClick(answer?.id);
            }}
          />
        </div>
        <p>{answer?.ratingCount}</p>
        <div className={styles.thumbIcon}>
          <img
            src={thumbDown.src}
            alt="thumb-Down"
            onClick={() => {
              if (onThumbDownClick) onThumbDownClick(answer?.id);
            }}
          />
        </div>
      </div>
      <div className={`${styles.subContainer} bgcolor__light-theme`}>
        <div className={styles.cornerBadge}>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            dangerouslySetInnerHTML={{ __html: svgCode }}
          />
          <p className={styles.bubbleText}>A</p>
        </div>
        <div className={styles.answerContainer}>
          <div className={styles.topContainer}>
            <p>{answer?.personName}</p>
            <p>{formattedDateQuestion}</p>
            <div className={styles.line} />
          </div>
          <div className={styles.answerContent}>
            <div className={styles.contextTextContainer}>
              <ReactQuill
                className={styles.bodyInput}
                theme="bubble"
                value={answer?.text}
                readOnly
              />
            </div>
            <div className={styles.commentText}>
              <p>Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
