import React from "react";
import styles from "./qaContent.module.css";
import { SearchFilter, ProfilePopup, BubbleItem } from "../../components";
import { QuestionCard, AnswerCard } from "../../containers";

const QaContent = () => {
  return <div className={styles.container}>
     <ProfilePopup />
     <div className={styles.bubbleContainer}>
      <BubbleItem text="Tutorial questions"/>
     </div>
      <div className={styles.innerContentContainer}>
      <QuestionCard />
      <AnswerCard/>
      <AnswerCard/>
      <AnswerCard/>
      </div>
  </div>;
};

export default QaContent;
