import { createContext } from "react";
import { AnswerDto } from "../../interfaces";

// State at first load time
export const INITIAL_STATE: IAnswerStateContext = {};

// Specifying the state
export interface IAnswerStateContext {
  readonly answerCreated?: AnswerDto;
  readonly answersList?: Array<AnswerDto>;
  readonly answerUpdated?: AnswerDto;
  readonly answerDeleted?: string;
  readonly answerSelected?: AnswerDto[];
  readonly answersTotalCount?: number;
}

// Specifying the action
export interface IAnswerActionContext {
  createAnswer?: (payload: AnswerDto) => void;
  listAnswers?: (payload: string| string[]) => void;
  getAnswersTotalCount?: () => void;
  updateAnswer?: (payload: AnswerDto) => void;
  deleteAnswer?: (payload: string) => void;
  getAnswer?: (payload: string) => void;
}

// Initializing the state and the action
export const AnswerStateContext = createContext<IAnswerStateContext>(INITIAL_STATE);
export const AnswerActionContext = createContext<IAnswerActionContext>({});
