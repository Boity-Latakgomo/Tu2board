import React, { useState, useEffect } from "react";
import styles from "./qaContent.module.css";
import { useUser } from "../../../app/providers/user";
import { SearchFilter, ProfilePopup, BubbleItem } from "../../components";
import { QuestionCard, AnswerCard } from "../../containers";
import { useAnswer } from "../../../app/providers/answer";
import { useQuestion } from "../../../app/providers/question";
import { useRating } from "../../../app/providers/rating";
import { AnswerDto, RatingDto } from "../../../app/interfaces";
import { Value } from "react-quill";
import students from "../../../app/assets/students.png";
import educationMaterials from "../../../app/assets/educationMaterials.png";

interface IQaContentProps {
  questionId?: string;
  onAnswerClick?: (Value: boolean) => void;
  isShowProfileIcon?: boolean;
}

const QaContent = ({ questionId, onAnswerClick, isShowProfileIcon }: IQaContentProps) => {

  const loggedIn = localStorage.getItem("token");
  if(!loggedIn){
    window.location.replace("/");
  }
  
  const { UserDetails } = useUser();
  const { getSelectedQuestion, questionsSelectedById } = useQuestion();
  const { answersList, listAnswers } = useAnswer();
  const { createRating, ratingCreated } = useRating();

  useEffect(() => {
    if (getSelectedQuestion && questionId) getSelectedQuestion(questionId);
    if (listAnswers && questionId) listAnswers(questionId);
  }, [ratingCreated]);

  const thumbUpClick = (id: string) => {
    const rate: RatingDto = {
      voteType: 1,
      answerId: id,
    };

    if (createRating) createRating(rate);
  };

  const thumbDownClick = (id: string) => {
    const rate: RatingDto = {
      voteType: 2,
      answerId: id,
    };

    if (createRating) createRating(rate);
  };

  if (answersList)
    answersList?.sort((a, b) => (b.ratingCount ?? 0) - (a?.ratingCount ?? 0));

  return (
    <div className={styles.container}>
      {isShowProfileIcon && <ProfilePopup user={UserDetails} />}
      <div className={styles.bubbleContainer}>
        <BubbleItem text="QAs" />
      </div>
      <div className={styles.innerContentContainer}>
        <QuestionCard question={questionsSelectedById} onAnswerClick={onAnswerClick}/>
        {(answersList && answersList.length > 0)? answersList?.map((answer, index) => (
          <AnswerCard
            key={index}
            answer={answer}
            onThumbUpClick={thumbUpClick}
            onThumbDownClick={thumbDownClick}
          />
        )) : <div className={styles.noAnswerContainer}><p>This question has no answers yet! be the first to<span className={styles.answerText} onClick={onAnswerClick}>answer</span></p></div>}
      </div>
      <div className={styles.topImageContainer}>
        <img src={educationMaterials.src} alt="education-materials" />
      </div>
      <div className={styles.bottomImageContainer}>
        <img src={students.src} alt="students" />
      </div>
    </div>
  );
};

export default QaContent;
