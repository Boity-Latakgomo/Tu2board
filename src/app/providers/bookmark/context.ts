
import { createContext } from "react";
import { BookmarkDto } from "../../interfaces";

// State at first load time
export const INITIAL_STATE: IBookmarkStateContext = {};

// Specifying the state
export interface IBookmarkStateContext {
readonly bookmarkCreated?: BookmarkDto;
readonly bookmarksList?: Array<BookmarkDto>;
readonly bookmarkUpdated?: BookmarkDto;
readonly bookmarkDeleted?: string;
readonly bookmarkSelected?: BookmarkDto[];
readonly bookmarksTotalCount?: number;
}

// Specifying the action
export interface IBookmarkActionContext {
createBookmark?: (payload: BookmarkDto) => void;
listBookmarks?: (payload: string| string[]) => void;
getBookmarksTotalCount?: () => void;
updateBookmark?: (payload: BookmarkDto) => void;
deleteBookmark?: (payload: string) => void;
getBookmark?: (payload: string) => void;
}

// Initializing the state and the action
export const BookmarkStateContext = createContext<IBookmarkStateContext>(INITIAL_STATE);
export const BookmarkActionContext = createContext<IBookmarkActionContext>({});