import { createAction } from 'redux-actions';
import { IRatingStateContext } from './context';
import { RatingDto } from '../../interfaces';

export enum RatingActionEnum {
  createRatingRequest = 'CREATE_RATING_REQUEST',
  listRatingsRequest = 'LIST_RATINGS_REQUEST',
  updateRatingRequest = 'UPDATE_RATING_REQUEST',
  deleteRatingRequest = 'DELETE_RATING_REQUEST',
  getRatingRequest = 'GET_RATING_REQUEST',
  searchRatingRequest = 'SEARCH_RATING_REQUEST',
  selectRatingRequest = 'SELECT_RATING_REQUEST',
  getRatingsTotalCountRequest = 'GET_RATINGS_TOTAL_COUNT_REQUEST',
}

// Must match the variable in the interface state context (ratingCreated)
export const createRatingRequestAction = createAction<IRatingStateContext, RatingDto>(RatingActionEnum.createRatingRequest, (ratingCreated) => ({ ratingCreated }));
export const listRatingsRequestAction = createAction<IRatingStateContext, Array<RatingDto>>(RatingActionEnum.listRatingsRequest, (ratingsList) => ({ ratingsList }));
export const getRatingsTotalCountRequestAction = createAction<IRatingStateContext, number>(RatingActionEnum.getRatingsTotalCountRequest, (ratingsTotalCount) => ({ ratingsTotalCount }));
export const updateRatingRequestAction = createAction<IRatingStateContext, RatingDto>(RatingActionEnum.updateRatingRequest, (ratingUpdated) => ({ ratingUpdated }));
export const deleteRatingRequestAction = createAction<IRatingStateContext, string>(RatingActionEnum.deleteRatingRequest, (ratingDeleted) => ({ ratingDeleted }));
export const getRatingRequestAction = createAction<IRatingStateContext, RatingDto[]>(RatingActionEnum.getRatingRequest, (ratingSelected) => ({ ratingSelected }));
export const selectRatingRequestAction = createAction<IRatingStateContext, RatingDto[]>(RatingActionEnum.selectRatingRequest, (ratingSelected) => ({ ratingSelected }));
