import { createContext } from "react";
import { QuestionDto } from "../../interfaces";

// State at first load time
export const INITIAL_STATE: IQuestionStateContext = {};

// Specifying the state
export interface IQuestionStateContext {
readonly questionCreated?: QuestionDto;
readonly questionsList?: Array<QuestionDto>;
readonly questionUpdated?: QuestionDto;
readonly questionDeleted?: string;
readonly questionSelected?: QuestionDto[];
readonly questionsTotalCount?: number;
readonly questionsSelectedById?: QuestionDto;
}

// Specifying the action
export interface IQuestionActionContext {
createQuestion?: (payload: QuestionDto) => void;
listQuestions?: () => void;
getQuestionsTotalCount?: () => void;
updateQuestion?: (payload: QuestionDto) => void;
deleteQuestion?: (payload: string) => void;
getQuestion?: (payload: string) => void;
getSelectedQuestion?: (payload: string|string[]) => void;
}

// Initializing the state and the action
export const QuestionStateContext = createContext<IQuestionStateContext>(INITIAL_STATE);
export const QuestionActionContext = createContext<IQuestionActionContext>({});