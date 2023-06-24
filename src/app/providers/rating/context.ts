import { createContext } from "react";
import { RatingDto } from "../../interfaces";

// State at first load time
export const INITIAL_STATE: IRatingStateContext = {};

// Specifying the state
export interface IRatingStateContext {
  readonly ratingCreated?: RatingDto;
  readonly ratingsList?: Array<RatingDto>;
  readonly ratingUpdated?: RatingDto;
  readonly ratingDeleted?: string;
  readonly ratingSelected?: RatingDto[];
  readonly ratingsTotalCount?: number;
}

// Specifying the action
export interface IRatingActionContext {
  createRating?: (payload: RatingDto) => void;
  listRatings?: (payload: string | string[]) => void;
  getRatingsTotalCount?: () => void;
  updateRating?: (payload: RatingDto) => void;
  deleteRating?: (payload: string) => void;
  getRating?: (payload: string) => void;
}

// Initializing the state and the action
export const RatingStateContext = createContext<IRatingStateContext>(INITIAL_STATE);
export const RatingActionContext = createContext<IRatingActionContext>({});
