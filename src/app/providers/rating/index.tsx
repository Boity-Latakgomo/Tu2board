import React, {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { RatingReducer } from "./reducer";
import {
  INITIAL_STATE,
  RatingActionContext,
  RatingStateContext,
} from "./context";
import { message } from "antd";

import api from "../../api";
import { RatingDto } from "../../interfaces";
import {
  createRatingRequestAction,
  listRatingsRequestAction,
  getRatingsTotalCountRequestAction,
  updateRatingRequestAction,
  deleteRatingRequestAction,
  getRatingRequestAction,
} from "./action";

// Define the provider and the endpoint functionality
const RatingProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  // Destructure the useReducer
  const [state, dispatch] = useReducer(RatingReducer, INITIAL_STATE);

  const token = "localStorage.getItem";
  const localhost = "https://localhost:44311/api/";

  // Call the API/backend/endpoints [CREATE_RATING_REQUEST_ACTION]
  const createRating = async (rating: RatingDto) => {
    try {
      const response = await api.post(
        `https://localhost:44311/api/services/app/Rating/Create`,
        rating
      );
      if (response.status === 200) {
        const data = response.data;
        dispatch(createRatingRequestAction(data.result));
      } else {
        console.log("response::", response);
        message.error(response.data.error.message);
      }
    } catch (error) {
      console.log("catch::", error.message);
    }
  };

  // [FETCH_RATINGS_REQUEST_ACTION]
  const listRatings = async (questionId: string) => {
    try {
      const response = await api.get(
        `https://localhost:44311/api/services/app/Ratings/GetByQuestionId?questionId=${questionId}`
      );
      if (response.status === 200) {
        const ratings = response.data;
        dispatch(listRatingsRequestAction(ratings.result));
        console.log("index ratings::", ratings.result);
      }
    } catch (error) {
      console.log("Error all ratings::", error);
    }
  };

  // [GET_RATINGS_TOTAL_COUNT_REQUEST_ACTION]
  const getRatingsTotalCount = async () => {
    try {
      const response = await api.get(
        "https://localhost:44311/api/services/app/Rating/GetTotalCount"
      );
      if (response.status === 200) {
        const totalRatings = response.data;
        console.log("total ratings::", totalRatings.result);
        dispatch(getRatingsTotalCountRequestAction(totalRatings.result));
      }
    } catch (error) {
      console.log("Error total ratings::", error);
    }
  };

  // [UPDATE_RATINGS_REQUEST_ACTION]
  const updateRating = async (updatedData: RatingDto) => {
    try {
      const response = await api.put(
        `${localhost}/services/app/Rating/Update/`,
        updatedData
      );

      if (response.status === 200) {
        const data = response.data;
        dispatch(updateRatingRequestAction(data.result));
        message.success("Rating updated successfully");
      } else {
        const data = response.data;
        message.error(data.error.message);
      }
    } catch (error) {
      console.log("Error updating rating:", error.message);
    }
  };

  // [DELETE_RATINGS_REQUEST_ACTION]
  const deleteRating = async (ratingId: string) => {
    try {
      const response = await api.delete(
        `${localhost}services/app/Rating/Delete?id=${ratingId}`
      );

      if (response.status === 200) {
        const url = response.config.url;
        const idStartIndex = url.indexOf("id=") + "id=".length;
        const idValue = url.substring(idStartIndex);
        dispatch(deleteRatingRequestAction(idValue));
        message.success("Rating deleted successfully.");
      } else {
        message.error("Failed to delete rating!");
      }
    } catch (error) {
      console.log("Error deleting rating:", error.message);
    }
  };

  // [GET_RATING_REQUEST_ACTION]
  const getRating = async (facultyId: string) => {
    try {
      console.log("ID of rating", facultyId);
      const response = await api.get(
        `https://localhost:44311/api/services/app/Rating/GetAllByFacultyId?id=${facultyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        dispatch(getRatingRequestAction(data.result));
        console.log("ratings in faculty::", data.result);
      } else {
        message.error("Failed to get rating");
      }
    } catch (error) {
      console.log("Error getting rating:", error.message);
    }
  };

  // Creating a provider component
  return (
    <RatingStateContext.Provider value={state}>
      <RatingActionContext.Provider
        value={{
          createRating,
          deleteRating,
          getRating,
          getRatingsTotalCount,
          listRatings,
          updateRating,
        }}
      >
        {children}
      </RatingActionContext.Provider>
    </RatingStateContext.Provider>
  );
};

function useRatingState() {
  const context = useContext(RatingStateContext);
  if (!context) {
    throw new Error("useRatingState must be used within a RatingProvider");
  }
  return context;
}

function useRatingAction() {
  const context = useContext(RatingActionContext);
  if (context === undefined) {
    throw new Error("useRatingAction must be used within a RatingProvider");
  }
  return context;
}

function useRating() {
  return {
    ...useRatingState(),
    ...useRatingAction(),
  };
}

export { RatingProvider, useRating };
