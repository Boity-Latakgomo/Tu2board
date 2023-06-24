import { RatingActionEnum } from "./action";
import { IRatingStateContext } from "./context";

// Update state for each action and destructure and spread
export function RatingReducer(
  state: IRatingStateContext,
  action: ReduxActions.Action<IRatingStateContext>
): IRatingStateContext {
  const { type, payload } = action;

  switch (type) {
    case RatingActionEnum.createRatingRequest:
      return {
        ...state,
        ...payload,
      };
    case RatingActionEnum.listRatingsRequest:
      return {
        ...state,
        ...payload,
      };
    case RatingActionEnum.getRatingsTotalCountRequest:
      return {
        ...state,
        ...payload,
      };
    case RatingActionEnum.updateRatingRequest:
      const updatedRating = payload.ratingUpdated;
      console.log("action updateRating::", updatedRating);
      const updatedRatings = state.ratingsList.map((rating) =>
        rating.id === updatedRating.id ? updatedRating : rating
      );
      return {
        ...state,
        ratingsList: updatedRatings,
      };
    case RatingActionEnum.deleteRatingRequest:
      const ratingToDelete = payload.ratingDeleted;
      const updatedRatingsList = state.ratingsList.filter(
        (rating) => rating.id !== ratingToDelete
      );
      return {
        ...state,
        ratingsList: updatedRatingsList,
      };
    case RatingActionEnum.getRatingRequest:
      return {
        ...state,
        ...payload,
      };
    case RatingActionEnum.searchRatingRequest:
      return {
        ...state,
        ...payload,
      };
    case RatingActionEnum.selectRatingRequest:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
