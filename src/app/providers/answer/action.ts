import { createAction } from 'redux-actions';
import { IAnswerStateContext } from './context';
import { AnswerDto } from '../../interfaces';

export enum AnswerActionEnum {
  createAnswerRequest = 'CREATE_ANSWER_REQUEST',
  listAnswersRequest = 'LIST_ANSWERS_REQUEST',
  updateAnswerRequest = 'UPDATE_ANSWER_REQUEST',
  deleteAnswerRequest = 'DELETE_ANSWER_REQUEST',
  getAnswerRequest = 'GET_ANSWER_REQUEST',
  searchAnswerRequest = 'SEARCH_ANSWER_REQUEST',
  selectAnswerRequest = 'SELECT_ANSWER_REQUEST',
  getAnswersTotalCountRequest = 'GET_ANSWERS_TOTAL_COUNT_REQUEST',
}

// Must match the variable in the interface state context (answerCreated)
export const createAnswerRequestAction = createAction<IAnswerStateContext, AnswerDto>(AnswerActionEnum.createAnswerRequest, (answerCreated) => ({ answerCreated }));
export const listAnswersRequestAction = createAction<IAnswerStateContext, Array<AnswerDto>>(AnswerActionEnum.listAnswersRequest, (answersList) => ({ answersList }));
export const getAnswersTotalCountRequestAction = createAction<IAnswerStateContext, number>(AnswerActionEnum.getAnswersTotalCountRequest, (answersTotalCount) => ({ answersTotalCount }));
export const updateAnswerRequestAction = createAction<IAnswerStateContext, AnswerDto>(AnswerActionEnum.updateAnswerRequest, (answerUpdated) => ({ answerUpdated }));
export const deleteAnswerRequestAction = createAction<IAnswerStateContext, string>(AnswerActionEnum.deleteAnswerRequest, (answerDeleted) => ({ answerDeleted }));
export const getAnswerRequestAction = createAction<IAnswerStateContext, AnswerDto[]>(AnswerActionEnum.getAnswerRequest, (answerSelected) => ({ answerSelected }));
export const selectAnswerRequestAction = createAction<IAnswerStateContext, AnswerDto[]>(AnswerActionEnum.selectAnswerRequest, (answerSelected) => ({ answerSelected }));
