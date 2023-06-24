import React, { useState, useEffect } from "react";
import styles from "./qaContent.module.css";
import { SearchFilter, ProfilePopup, BubbleItem } from "../../components";
import { QuestionCard, AnswerCard } from "../../containers";
import { useAnswer } from "../../../app/providers/answer";
import { useQuestion } from "../../../app/providers/question";
import { useRating } from "../../../app/providers/rating";
import { AnswerDto, RatingDto } from "../../../app/interfaces";
import { Value } from "react-quill";

interface IQaContentProps {
  questionId?: string;
  onAnswerClick?: (Value: boolean) => void
}

const QaContent = ({ questionId, onAnswerClick }: IQaContentProps) => {
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
      {/* <ProfilePopup /> */}
      <div className={styles.bubbleContainer}>
        <BubbleItem text="QAs" />
      </div>
      <div className={styles.innerContentContainer}>
        <QuestionCard question={questionsSelectedById} onAnswerClick={onAnswerClick}/>
        {answersList?.map((answer, index) => (
          <AnswerCard
            key={index}
            answer={answer}
            onThumbUpClick={thumbUpClick}
            onThumbDownClick={thumbDownClick}
          />
        ))}
      </div>
    </div>
  );
};

export default QaContent;
