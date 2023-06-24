import { createAction } from 'redux-actions';
import { IBookmarkStateContext } from './context';
import { BookmarkDto } from '../../interfaces';

export enum BookmarkActionEnum {
createBookmarkRequest = 'CREATE_BOOKMARK_REQUEST',
listBookmarksRequest = 'LIST_BOOKMARKS_REQUEST',
updateBookmarkRequest = 'UPDATE_BOOKMARK_REQUEST',
deleteBookmarkRequest = 'DELETE_BOOKMARK_REQUEST',
getBookmarkRequest = 'GET_BOOKMARK_REQUEST',
searchBookmarkRequest = 'SEARCH_BOOKMARK_REQUEST',
selectBookmarkRequest = 'SELECT_BOOKMARK_REQUEST',
getBookmarksTotalCountRequest = 'GET_BOOKMARKS_TOTAL_COUNT_REQUEST',
}

// Must match the variable in the interface state context (bookmarkCreated)
export const createBookmarkRequestAction = createAction<IBookmarkStateContext, BookmarkDto>(BookmarkActionEnum.createBookmarkRequest, (bookmarkCreated) => ({ bookmarkCreated }));
export const listBookmarksRequestAction = createAction<IBookmarkStateContext, Array<BookmarkDto>>(BookmarkActionEnum.listBookmarksRequest, (bookmarksList) => ({ bookmarksList }));
export const getBookmarksTotalCountRequestAction = createAction<IBookmarkStateContext, number>(BookmarkActionEnum.getBookmarksTotalCountRequest, (bookmarksTotalCount) => ({ bookmarksTotalCount }));
export const updateBookmarkRequestAction = createAction<IBookmarkStateContext, BookmarkDto>(BookmarkActionEnum.updateBookmarkRequest, (bookmarkUpdated) => ({ bookmarkUpdated }));
export const deleteBookmarkRequestAction = createAction<IBookmarkStateContext, string>(BookmarkActionEnum.deleteBookmarkRequest, (bookmarkDeleted) => ({ bookmarkDeleted }));
export const getBookmarkRequestAction = createAction<IBookmarkStateContext, BookmarkDto[]>(BookmarkActionEnum.getBookmarkRequest, (bookmarkSelected) => ({ bookmarkSelected }));
export const selectBookmarkRequestAction = createAction<IBookmarkStateContext, BookmarkDto[]>(BookmarkActionEnum.selectBookmarkRequest, (bookmarkSelected) => ({ bookmarkSelected }));