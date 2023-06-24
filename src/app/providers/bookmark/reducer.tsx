import { BookmarkActionEnum } from "./action";
import { IBookmarkStateContext } from "./context";

// Update state for each action and destructure and spread
export function BookmarkReducer(
state: IBookmarkStateContext,
action: ReduxActions.Action<IBookmarkStateContext>
): IBookmarkStateContext {
const { type, payload } = action;

switch (type) {
case BookmarkActionEnum.createBookmarkRequest:
return {
...state,
bookmarksList: [...state.bookmarksList, payload.bookmarkCreated],
};
case BookmarkActionEnum.listBookmarksRequest:
return {
...state,
...payload,
};
case BookmarkActionEnum.getBookmarksTotalCountRequest:
return {
...state,
...payload,
};
case BookmarkActionEnum.updateBookmarkRequest:
const updatedBookmark = payload.bookmarkUpdated;
console.log("action updateBookmark::", updatedBookmark);
const updatedBookmarks = state.bookmarksList.map((bookmark) =>
bookmark.id === updatedBookmark.id ? updatedBookmark : bookmark
);
return {
...state,
bookmarksList: updatedBookmarks,
};
case BookmarkActionEnum.deleteBookmarkRequest:
const bookmarkToDelete = payload.bookmarkDeleted;
const updatedBookmarksList = state.bookmarksList.filter(
(bookmark) => bookmark.id !== bookmarkToDelete
);
return {
...state,
bookmarksList: updatedBookmarksList,
};
case BookmarkActionEnum.getBookmarkRequest:
return {
...state,
...payload,
};
case BookmarkActionEnum.searchBookmarkRequest:
return {
...state,
...payload,
};
case BookmarkActionEnum.selectBookmarkRequest:
return {
...state,
...payload,
};
default:
return state;
}
}