import { QuestionActionEnum } from "./actions";
import { IQuestionStateContext } from "./context";

// Update state for each action and destructure and spread
export function QuestionReducer(
  state: IQuestionStateContext,
  action: ReduxActions.Action<IQuestionStateContext>
): IQuestionStateContext {
  const { type, payload } = action;

  switch (type) {
    case QuestionActionEnum.createQuestionRequest:
      return {
        ...state,
        ...payload,
      };
    case QuestionActionEnum.listQuestionsRequest:
      return {
        ...state,
        ...payload,
      };
    case QuestionActionEnum.getQuestionsTotalCountRequest:
      return {
        ...state,
        ...payload,
      };
    case QuestionActionEnum.getQuestionByIdRequest:
      return {
        ...state,
        ...payload,
      };
    case QuestionActionEnum.updateQuestionRequest:
      const updatedQuestion = payload.questionUpdated;
      console.log("action updateQuestion::", updatedQuestion);
      const updatedQuestions = state.questionsList.map((question) =>
        question.id === updatedQuestion.id ? updatedQuestion : question
      );
      return {
        ...state,
        questionsList: updatedQuestions,
      };
    case QuestionActionEnum.deleteQuestionRequest:
      const questionToDelete = payload.questionDeleted;
      const updatedQuestionsList = state.questionsList.filter(
        (question) => question.id !== questionToDelete
      );
      return {
        ...state,
        questionsList: updatedQuestionsList,
      };
    case QuestionActionEnum.getQuestionRequest:
      return {
        ...state,
        ...payload,
      };
    case QuestionActionEnum.searchQuestionRequest:
      return {
        ...state,
        ...payload,
      };
    case QuestionActionEnum.selectQuestionRequest:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
