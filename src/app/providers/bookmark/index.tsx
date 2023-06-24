import { BookmarkReducer } from "./reducer";
import {
  INITIAL_STATE,
  BookmarkActionContext,
  BookmarkStateContext,
} from "./context";
import { message } from "antd";

import api from "../../api";
import { BookmarkDto } from "../../interfaces";
import {
  createBookmarkRequestAction,
  listBookmarksRequestAction,
  getBookmarksTotalCountRequestAction,
  updateBookmarkRequestAction,
  deleteBookmarkRequestAction,
  getBookmarkRequestAction,
} from "./action";
import { FC, PropsWithChildren, useReducer, useContext } from "react";

// Define the provider and the endpoint functionality
const BookmarkProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  // Destructure the useReducer
  const [state, dispatch] = useReducer(BookmarkReducer, INITIAL_STATE);

  const token = "localStorage.getItem";
  const localhost = "https://localhost:44311/api/";

  // Call the API/backend/endpoints [CREATE_BOOKMARK_REQUEST_ACTION]
  const createBookmark = async (bookmark: BookmarkDto) => {
    try {
      const response = await api.post(
        `https://localhost:44311/api/services/app/Bookmarks/Create`,
        bookmark
      );
      if (response.status === 200) {
        const data = response.data;
        dispatch(createBookmarkRequestAction(data.result));
        message.success("Bookmark created successfully");
      } else {
        console.log("response::", response);
        message.error(response.data.error.message);
      }
    } catch (error) {
      console.log("catch::", error.message);
    }
  };

  // [FETCH_BOOKMARKS_REQUEST_ACTION]
  const listBookmarks = async (questionId: string) => {
    try {
      const response = await api.get(
        `https://localhost:44311/api/services/app/Bookmarks/GetByQuestionId?questionId=${questionId}`
      );
      if (response.status === 200) {
        const bookmarks = response.data;
        dispatch(listBookmarksRequestAction(bookmarks.result));
        console.log('index bookmarks::', bookmarks.result)
      }
    } catch (error) {
      console.log("Error all bookmarks::", error);
    }
  };

  // [GET_BOOKMARKS_TOTAL_COUNT_REQUEST_ACTION]
  const getBookmarksTotalCount = async () => {
    try {
      const response = await api.get(
        "https://localhost:44311/api/services/app/Bookmark/GetTotalCount"
      );
      if (response.status === 200) {
        const totalBookmarks = response.data;
        console.log("total bookmarks::", totalBookmarks.result);
        dispatch(getBookmarksTotalCountRequestAction(totalBookmarks.result));
      }
    } catch (error) {
      console.log("Error total bookmarks::", error);
    }
  };

  // [UPDATE_BOOKMARKS_REQUEST_ACTION]
  const updateBookmark = async (updatedData: BookmarkDto) => {
    try {
      const response = await api.put(
        `${localhost}/services/app/Bookmark/Update/`,
        updatedData
      );

      if (response.status === 200) {
        const data = response.data;
        dispatch(updateBookmarkRequestAction(data.result));
        message.success("Bookmark updated successfully");
      } else {
        const data = response.data;
        message.error(data.error.message);
      }
    } catch (error) {
      console.log("Error updating bookmark:", error.message);
    }
  };

  // [DELETE_BOOKMARKS_REQUEST_ACTION]
  const deleteBookmark = async (bookmarkId: string) => {
    try {
      const response = await api.delete(
        `${localhost}services/app/Bookmark/Delete?id=${bookmarkId}`
      );

      if (response.status === 200) {
        const url = response.config.url;
        const idStartIndex = url.indexOf("id=") + "id=".length;
        const idValue = url.substring(idStartIndex);
        dispatch(deleteBookmarkRequestAction(idValue));
        message.success("Bookmark deleted successfully.");
      } else {
        message.error("Failed to delete bookmark!");
      }
    } catch (error) {
      console.log("Error deleting bookmark:", error.message);
    }
  };

  // [GET_BOOKMARK_REQUEST_ACTION]
  const getBookmark = async (facultyId: string) => {
    try {
      console.log("ID of bookmark", facultyId);
      const response = await api.get(
        `https://localhost:44311/api/services/app/Bookmark/GetAllByFacultyId?id=${facultyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        dispatch(getBookmarkRequestAction(data.result));
        console.log("bookmarks in faculty::", data.result);
      } else {
        message.error("Failed to get bookmark");
      }
    } catch (error) {
      console.log("Error getting bookmark:", error.message);
    }
  };

  // Creating a provider component
  return (
    <BookmarkStateContext.Provider value={state}>
      <BookmarkActionContext.Provider
        value={{
          createBookmark,
          deleteBookmark,
          getBookmark,
          getBookmarksTotalCount,
          listBookmarks,
          updateBookmark,
        }}
      >
        {children}
      </BookmarkActionContext.Provider>
    </BookmarkStateContext.Provider>
  );
};

function useBookmarkState() {
  const context = useContext(BookmarkStateContext);
  if (!context) {
    throw new Error("useBookmarkState must be used within a BookmarkProvider");
  }
  return context;
}

function useBookmarkAction() {
  const context = useContext(BookmarkActionContext);
  if (context === undefined) {
    throw new Error("useBookmarkAction must be used within a BookmarkProvider");
  }
  return context;
}

function useBookmark() {
  return {
    ...useBookmarkState(),
    ...useBookmarkAction(),
  };
}

export { BookmarkProvider, useBookmark };
