import React, {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { QuestionReducer } from "./reducer";
import {
  INITIAL_STATE,
  QuestionActionContext,
  QuestionStateContext,
} from "./context";
import { message } from "antd";
import {
  createQuestionRequestAction,
  deleteQuestionRequestAction,
  listQuestionsRequestAction,
  getQuestionRequestAction,
  getQuestionsTotalCountRequestAction,
  selectQuestionRequestAction,
  updateQuestionRequestAction,
  selectQuestionByIdRequestAction,
} from "./actions";
import api from "../../api";
import { QuestionDto } from "../../interfaces";

// Define the provider and the endpoint functionality
const QuestionProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  // Destructure the useReducer
  const [state, dispatch] = useReducer(QuestionReducer, INITIAL_STATE);

  const token = "localStorage.getItem";
  const localhost = "https://localhost:44311/api/";

  // Call the API/backend/endpoints [CREATE_QUESTION_REQUEST_ACTION]
  const createQuestion = async (question: QuestionDto) => {
    console.log("Post with: ", question);
    try {
      const response = await api.post(
        `https://localhost:44311/api/services/app/Question/Create`,
        question
      );
      if (response.status === 200) {
        const data = response.data;
        dispatch(createQuestionRequestAction(data.result));
        message.success("Question created successfully");
        window.location.replace("/home");
      } else {
        console.log("response::", response);
        message.error(response.data.error.message);
      }
    } catch (error) {
      console.log("catch::", error.message);
    }
  };

  // [FETCH_QUESTIONS_REQUEST_ACTION]
  const listQuestions = async () => {
    try {
      const response = await api.get(
        "https://localhost:44311/api/services/app/Question/GetAll"
      );
      if (response.status === 200) {
        const questions = response.data;
        dispatch(listQuestionsRequestAction(questions.result.items));
      }
    } catch (error) {
      console.log("Error all questions::", error);
    }
  };

  // useEffect(() => {
  //   listQuestions();
  // }, []);

  // [GET_QUESTIONS_TOTAL_COUNT_REQUEST_ACTION]
  const getQuestionsTotalCount = async () => {
    try {
      const response = await api.get(
        "https://localhost:44311/api/services/app/Question/GetTotalCount"
      );
      if (response.status === 200) {
        const totalQuestions = response.data;
        console.log("total questions::", totalQuestions.result);
        dispatch(getQuestionsTotalCountRequestAction(totalQuestions.result));
      }
    } catch (error) {
      console.log("Error total questions::", error);
    }
  };

  // [UPDATE_QUESTIONS_REQUEST_ACTION]
  const updateQuestion = async (updatedData: QuestionDto) => {
    try {
      const response = await api.put(
        `${localhost}/services/app/Question/Update/`,
        updatedData
      );

      if (response.status === 200) {
        const data = response.data;
        dispatch(updateQuestionRequestAction(data.result));
        message.success("Question updated successfully");
      } else {
        const data = response.data;
        message.error(data.error.message);
      }
    } catch (error) {
      console.log("Error updating question:", error.message);
    }
  };

  // [DELETE_QUESTIONS_REQUEST_ACTION]
  const deleteQuestion = async (questionId: string) => {
    try {
      const response = await api.delete(
        `${localhost}services/app/Question/Delete?id=${questionId}`
      );

      if (response.status === 200) {
        const url = response.config.url;
        if (url) {
          const idStartIndex = url.indexOf("id=") + "id=".length;
          const idValue = url.substring(idStartIndex);
          dispatch(deleteQuestionRequestAction(idValue));
        }
        message.success("Question deleted successfully.");
      } else {
        message.error("Failed to delete question!");
      }
    } catch (error) {
      console.log("Error deleting question:", error.message);
    }
  };

  // [GET_QUESTION_REQUEST_ACTION]
  const getQuestion = async (courseId: string) => {
    try {
      console.log("ID of question", courseId);
      const response = await api.get(
        `https://localhost:44311/api/services/app/Question/GetQuestionsForCourse?courseId=${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        dispatch(getQuestionRequestAction(data.result));
        console.log("questions in faculty::", data.result);
      } else {
        message.error("Failed to get question");
      }
    } catch (error) {
      console.log("Error getting question:", error.message);
    }
  };
  // [GET_QUESTION_BY_ID_REQUEST_ACTION]
  const getSelectedQuestion = async (id: string) => {
    try {
      console.log("ID of question", id);
      const response = await api.get(
        `https://localhost:44311/api/services/app/Question/Get?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        dispatch(selectQuestionByIdRequestAction(data.result));
        console.log("questions in faculty::", data.result);
      } else {
        message.error("Failed to get question");
      }
    } catch (error) {
      console.log("Error getting question:", error.message);
    }
  };

  // Creating a provider component
  return (
    <QuestionStateContext.Provider value={state}>
      <QuestionActionContext.Provider
        value={{
          createQuestion,
          deleteQuestion,
          getQuestion,
          getQuestionsTotalCount,
          listQuestions,
          updateQuestion,
          getSelectedQuestion,
        }}
      >
        {children}
      </QuestionActionContext.Provider>
    </QuestionStateContext.Provider>
  );
};

function useQuestionState() {
  const context = useContext(QuestionStateContext);
  if (!context) {
    throw new Error("useQuestionState must be used within a QuestionProvider");
  }
  return context;
}

function useQuestionAction() {
  const context = useContext(QuestionActionContext);
  if (context === undefined) {
    throw new Error("useQuestionAction must be used within a QuestionProvider");
  }
  return context;
}

function useQuestion() {
  return {
    ...useQuestionState(),
    ...useQuestionAction(),
  };
}

export { QuestionProvider, useQuestion };
