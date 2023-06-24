
import { createAction } from 'redux-actions';
import { IQuestionStateContext } from './context';
import { QuestionDto } from '../../interfaces';

export enum QuestionActionEnum {
createQuestionRequest = 'CREATE_QUESTION_REQUEST',
listQuestionsRequest = 'LIST_QUESTIONS_REQUEST',
updateQuestionRequest = 'UPDATE_QUESTION_REQUEST',
deleteQuestionRequest = 'DELETE_QUESTION_REQUEST',
getQuestionRequest = 'GET_QUESTION_REQUEST',
getQuestionByIdRequest = 'GET_QUESTION_BY_ID_REQUEST',
searchQuestionRequest = 'SEARCH_QUESTION_REQUEST',
selectQuestionRequest = 'SELECT_QUESTION_REQUEST',
getQuestionsTotalCountRequest = 'GET_QUESTIONS_TOTAL_COUNT_REQUEST',
}

// Must match the variable in the interface state context (questionCreated)
export const createQuestionRequestAction = createAction<IQuestionStateContext, QuestionDto>(QuestionActionEnum.createQuestionRequest, (questionCreated) => ({ questionCreated }));                                                                                      
export const listQuestionsRequestAction = createAction<IQuestionStateContext, Array<QuestionDto>>(QuestionActionEnum.listQuestionsRequest, (questionSelected) => ({ questionSelected }));
export const getQuestionsTotalCountRequestAction = createAction<IQuestionStateContext, number>(QuestionActionEnum.getQuestionsTotalCountRequest, (questionsTotalCount) => ({ questionsTotalCount }));
export const updateQuestionRequestAction = createAction<IQuestionStateContext, QuestionDto>(QuestionActionEnum.updateQuestionRequest, (questionUpdated) => ({ questionUpdated }));
export const deleteQuestionRequestAction = createAction<IQuestionStateContext, string>(QuestionActionEnum.deleteQuestionRequest, (questionDeleted) => ({ questionDeleted }));
export const getQuestionRequestAction = createAction<IQuestionStateContext, QuestionDto[]>(QuestionActionEnum.getQuestionRequest, (questionSelected) => ({ questionSelected }));
export const selectQuestionRequestAction = createAction<IQuestionStateContext, QuestionDto[]>(QuestionActionEnum.selectQuestionRequest, (questionSelected) => ({ questionSelected }));
export const selectQuestionByIdRequestAction = createAction<IQuestionStateContext, QuestionDto>(QuestionActionEnum.getQuestionByIdRequest, (questionsSelectedById) => ({ questionsSelectedById }));