import { AnswerActionEnum } from "./action";
import { IAnswerStateContext } from "./context";

// Update state for each action and destructure and spread
export function AnswerReducer(
  state: IAnswerStateContext,
  action: ReduxActions.Action<IAnswerStateContext>
): IAnswerStateContext {
  const { type, payload } = action;

  switch (type) {
    case AnswerActionEnum.createAnswerRequest:
      return {
        ...state,
        answersList: [...state.answersList, payload.answerCreated],
      };
    case AnswerActionEnum.listAnswersRequest:
      return {
        ...state,
        ...payload,
      };
    case AnswerActionEnum.getAnswersTotalCountRequest:
      return {
        ...state,
        ...payload,
      };
    case AnswerActionEnum.updateAnswerRequest:
      const updatedAnswer = payload.answerUpdated;
      console.log("action updateAnswer::", updatedAnswer);
      const updatedAnswers = state.answersList?.map((answer) =>
        answer.id === updatedAnswer?.id ? updatedAnswer : answer
      );
      return {
        ...state,
        answersList: updatedAnswers,
      };
    case AnswerActionEnum.deleteAnswerRequest:
      const answerToDelete = payload.answerDeleted;
      const updatedAnswersList = state.answersList?.filter(
        (answer) => answer.id !== answerToDelete
      );
      return {
        ...state,
        answersList: updatedAnswersList,
      };
    case AnswerActionEnum.getAnswerRequest:
      return {
        ...state,
        ...payload,
      };
    case AnswerActionEnum.searchAnswerRequest:
      return {
        ...state,
        ...payload,
      };
    case AnswerActionEnum.selectAnswerRequest:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}

