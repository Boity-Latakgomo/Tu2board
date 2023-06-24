import React, { useEffect, useState } from "react";
import styles from "./homeContent.module.css";
import {
  SearchFilter,
  ProfilePopup,
  BubbleItem,
  QACard,
} from "../../components";
import { useQuestion } from "../../../app/providers/question";
import { useAnswer } from "../../../app/providers/answer";
import { useUser } from "../../../app/providers/user";
import { useCourse } from "../../../app/providers/Course";
import { ModuleDto, QuestionDto } from "../../../app/interfaces";

interface IHomeContentProps {
  searchText?: string;
  isShowProfileIcon?: boolean;
}

const HomeContent = ({ searchText, isShowProfileIcon }: IHomeContentProps) => {
  const { listQuestions, getQuestion, questionSelected } = useQuestion();
  const { UserDetails, getUserDetails } = useUser();
  const { listModules, modulesList } = useCourse();

  const [selectedModule, setSelectedModule] = useState<ModuleDto[]>([]);

  useEffect(() => {
    if (listQuestions) listQuestions();
    if (getUserDetails) getUserDetails();
  }, []);

  useEffect(() => {
    if (UserDetails) {
      if (listModules) listModules(UserDetails.courseId);
      if (getQuestion) getQuestion(UserDetails.courseId);
    }
  }, [UserDetails]);

  const handleSelectedTexts = (module: ModuleDto) => {
    setSelectedModule([...selectedModule, module]);
  };

  const removeSelectedCourse = (pickedModule: ModuleDto) => {
    const filteredCourses = selectedModule.filter(
      (module: ModuleDto) => module.id !== pickedModule.id
    );
    setSelectedModule(filteredCourses);
  };

  let unselectedModule: ModuleDto[] = [];

  if (modulesList) {
    unselectedModule = modulesList.filter(
      (moduleList) =>
        !selectedModule.some(
          (selectedModule) => moduleList.name === selectedModule.name
        )
    );
  }

  let filteredQuestions: QuestionDto[] = questionSelected ?? [];

  if (selectedModule.length > 0) {
    if (questionSelected)
      filteredQuestions = questionSelected.filter((question) =>
        selectedModule.some(
          (selectedModule) => question.moduleId === selectedModule.id
        )
      );
  }

  let searchedQuestions: QuestionDto[] = filteredQuestions;

  if (searchText) {
    searchedQuestions = searchedQuestions.filter(
      (question) =>
        question.title.toLowerCase().includes(searchText.toLowerCase()) ||
        question.text.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <div className={styles.container}>
      <SearchFilter
        data={unselectedModule}
        onTextSelected={handleSelectedTexts}
      />
      {isShowProfileIcon && <ProfilePopup user={UserDetails} />}
      <div className={styles.coursesContainer}>
        {selectedModule?.length > 0
          ? selectedModule.map((module, index) => (
              <>
                <BubbleItem
                  key={index}
                  showClose
                  module={module}
                  onRemoveItem={removeSelectedCourse}
                />
                <div className={styles.bubbleItemSpacer} />
              </>
            ))
          : null}
      </div>
      <div className={styles.qaContainer}>
        {searchedQuestions?.length > 0
          ? searchedQuestions.map((question, index) => (
              <>
                <div className={styles.qaCardSpacer} />
                <QACard key={index} question={question} />
              </>
            ))
          : null}
      </div>
    </div>
  );
};

export default HomeContent;
