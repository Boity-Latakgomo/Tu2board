import React, {
    FC,
    PropsWithChildren,
    useContext,
    useEffect,
    useReducer,
  } from "react";
  import { AnswerReducer } from "./reducer";
  import {
    INITIAL_STATE,
    AnswerActionContext,
    AnswerStateContext,
  } from "./context";
  import { message } from "antd";
  
  import api from "../../api";
  import { AnswerDto } from "../../interfaces";
  import {
    createAnswerRequestAction,
    listAnswersRequestAction,
    getAnswersTotalCountRequestAction,
    updateAnswerRequestAction,
    deleteAnswerRequestAction,
    getAnswerRequestAction,
  } from "./action";
  
  // Define the provider and the endpoint functionality
  const AnswerProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    // Destructure the useReducer
    const [state, dispatch] = useReducer(AnswerReducer, INITIAL_STATE);
  
    const token = "localStorage.getItem";
    const localhost = "https://localhost:44311/api/";
  
    // Call the API/backend/endpoints [CREATE_ANSWER_REQUEST_ACTION]
    const createAnswer = async (answer: AnswerDto) => {
      try {
        const response = await api.post(
          `https://localhost:44311/api/services/app/Answers/Create`,
          answer
        );
        if (response.status === 200) {
          const data = response.data;
          dispatch(createAnswerRequestAction(data.result));
          message.success("Answer created successfully");
        } else {
          console.log("response::", response);
          message.error(response.data.error.message);
        }
      } catch (error) {
        console.log("catch::", error.message);
      }
    };
  
    // [FETCH_ANSWERS_REQUEST_ACTION]
    const listAnswers = async (questionId: string) => {
      try {
        const response = await api.get(
          `https://localhost:44311/api/services/app/Answers/GetByQuestionId?questionId=${questionId}`
        );
        if (response.status === 200) {
          const answers = response.data;
          dispatch(listAnswersRequestAction(answers.result));
          console.log('index answers::', answers.result)
        }
      } catch (error) {
        console.log("Error all answers::", error);
      }
    };
  
    // [GET_ANSWERS_TOTAL_COUNT_REQUEST_ACTION]
    const getAnswersTotalCount = async () => {
      try {
        const response = await api.get(
          "https://localhost:44311/api/services/app/Answer/GetTotalCount"
        );
        if (response.status === 200) {
          const totalAnswers = response.data;
          console.log("total answers::", totalAnswers.result);
          dispatch(getAnswersTotalCountRequestAction(totalAnswers.result));
        }
      } catch (error) {
        console.log("Error total answers::", error);
      }
    };
  
    // [UPDATE_ANSWERS_REQUEST_ACTION]
    const updateAnswer = async (updatedData: AnswerDto) => {
      try {
        const response = await api.put(
          `${localhost}/services/app/Answer/Update/`,
          updatedData
        );
  
        if (response.status === 200) {
          const data = response.data;
          dispatch(updateAnswerRequestAction(data.result));
          message.success("Answer updated successfully");
        } else {
          const data = response.data;
          message.error(data.error.message);
        }
      } catch (error) {
        console.log("Error updating answer:", error.message);
      }
    };
  
    // [DELETE_ANSWERS_REQUEST_ACTION]
    const deleteAnswer = async (answerId: string) => {
      try {
        const response = await api.delete(
          `${localhost}services/app/Answer/Delete?id=${answerId}`
        );
  
        if (response.status === 200) {
          const url = response.config.url;
          const idStartIndex = url.indexOf("id=") + "id=".length;
          const idValue = url.substring(idStartIndex);
          dispatch(deleteAnswerRequestAction(idValue));
          message.success("Answer deleted successfully.");
        } else {
          message.error("Failed to delete answer!");
        }
      } catch (error) {
        console.log("Error deleting answer:", error.message);
      }
    };
  
    // [GET_ANSWER_REQUEST_ACTION]
    const getAnswer = async (facultyId: string) => {
      try {
        console.log("ID of answer", facultyId);
        const response = await api.get(
          `https://localhost:44311/api/services/app/Answer/GetAllByFacultyId?id=${facultyId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
  
        if (response.status === 200) {
          const data = response.data;
          dispatch(getAnswerRequestAction(data.result));
          console.log("answers in faculty::", data.result);
        } else {
          message.error("Failed to get answer");
        }
      } catch (error) {
        console.log("Error getting answer:", error.message);
      }
    };
  
    // Creating a provider component
    return (
        <AnswerStateContext.Provider value={state}>
          <AnswerActionContext.Provider
            value={{
              createAnswer,
              deleteAnswer,
              getAnswer,
              getAnswersTotalCount,
              listAnswers,
              updateAnswer,
            }}
          >
            {children}
          </AnswerActionContext.Provider>
        </AnswerStateContext.Provider>
      );
  };
  
  function useAnswerState() {
    const context = useContext(AnswerStateContext);
    if (!context) {
      throw new Error("useAnswerState must be used within an AnswerProvider");
    }
    return context;
  }
  
  function useAnswerAction() {
    const context = useContext(AnswerActionContext);
    if (context === undefined) {
      throw new Error("useAnswerAction must be used within an AnswerProvider");
    }
    return context;
  }
  
  function useAnswer() {
    return {
      ...useAnswerState(),
      ...useAnswerAction(),
    };
  }
  
  export { AnswerProvider, useAnswer };
  