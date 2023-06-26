import React from "react";
import styles from "./tutorialItem.module.css";
import { StoredFileDto } from "../../../app/interfaces";

interface ITutorialItemProps {
  data: StoredFileDto;
  onClick?: (content: string) => void;
}

function TutorialItem({ data, onClick }: ITutorialItemProps) {
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
      return `Posted ${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `Posted ${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `Posted ${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `Posted ${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `Posted ${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return `Posted ${seconds} second${seconds !== 1 ? "s" : ""} ago`;
    }
  }

  const formattedDate = formatDate(new Date(data.creationTime));

  return (
    <div
      className={`${styles.container} bgcolor__light-theme`}
      onClick={() => {
        if (onClick) onClick(data.data);
      }}
    >
      <div className={styles.content}>
        <p className={styles.date}>{formattedDate}</p>
        <p className={styles.title}>{data.name.split(".")[0]}</p>
      </div>
      <div className={styles.box} />
    </div>
  );
}

export default TutorialItem;
