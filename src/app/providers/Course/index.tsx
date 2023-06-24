import React, {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { CourseReducer } from "./reducer";
import {
  INITIAL_STATE,
  CourseActionContext,
  CourseStateContext,
} from "./context";
import { message } from "antd";
import {
  createCourseRequestAction,
  deleteCourseRequestAction,
  listCoursesRequestAction,
  getCourseRequestAction,
  getCoursesTotalCountRequestAction,
  selectCourseRequestAction,
  updateCourseRequestAction,
  listModulesRequestAction,
} from "./actions";
import api from "../../api";
import { CourseDto } from "../../interfaces";

// Define the provider and the endpoint functionality
const CourseProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  // Destructure the useReducer
  const [state, dispatch] = useReducer(CourseReducer, INITIAL_STATE);

  const token = "localStorage.getItem";
  const localhost = "https://localhost:44311/api/";

  // Call the API/backend/endpoints [CREATE_COURSE_REQUEST_ACTION]
  const createCourse = async (course: CourseDto) => {
    try {
      const response = await api.post(
        `https://localhost:44311/api/services/app/Course/Create`,
        course
      );
      if (response.status === 200) {
        const data = response.data;
        dispatch(createCourseRequestAction(data.result));
        message.success("Course created successfully");
      } else {
        console.log("response::", response);
        message.error(response.data.error.message);
      }
    } catch (error) {
      console.log("catch::", error.message);
    }
  };

  // [FETCH_COURSES_REQUEST_ACTION]
  const listCourses = async () => {
    try {
      const response = await api.get(
        "https://localhost:44311/api/services/app/Course/GetAll"
      );
      if (response.status === 200) {
        const courses = response.data;
        dispatch(listCoursesRequestAction(courses.result.items));
      }
    } catch (error) {
      console.log("Error all courses::", error);
    }
  };

  useEffect(() => {
    listCourses();
  }, []);

  // [GET_COURSES_TOTAL_COUNT_REQUEST_ACTION]
  const getCoursesTotalCount = async () => {
    try {
      const response = await api.get(
        "https://localhost:44311/api/services/app/Course/GetTotalCount"
      );
      if (response.status === 200) {
        const totalCourses = response.data;
        console.log("total courses::", totalCourses.result);
        dispatch(getCoursesTotalCountRequestAction(totalCourses.result));
      }
    } catch (error) {
      console.log("Error total courses::", error);
    }
  };

  // [UPDATE_COURSES_REQUEST_ACTION]
  const updateCourse = async (updatedData: CourseDto) => {
    try {
      const response = await api.put(
        `${localhost}/services/app/Course/Update/`,
        updatedData
      );

      if (response.status === 200) {
        const data = response.data;
        dispatch(updateCourseRequestAction(data.result));
        message.success("Course updated successfully");
      } else {
        const data = response.data;
        message.error(data.error.message);
      }
    } catch (error) {
      console.log("Error updating course:", error.message);
    }
  };

  // [DELETE_COURSES_REQUEST_ACTION]
  const deleteCourse = async (courseId: string) => {
    try {
      const response = await api.delete(
        `${localhost}services/app/Course/Delete?id=${courseId}`
      );

      if (response.status === 200) {
        const url = response.config.url;
        const idStartIndex = url.indexOf("id=") + "id=".length;
        const idValue = url.substring(idStartIndex);
        dispatch(deleteCourseRequestAction(idValue));
        message.success("Course deleted successfully.");
      } else {
        message.error("Failed to delete course!");
      }
    } catch (error) {
      console.log("Error deleting course:", error.message);
    }
  };

  // [GET_COURSE_REQUEST_ACTION]
  const getCourse = async (facultyId: string) => {
    try {
      console.log("ID of course", facultyId);
      const response = await api.get(
        `https://localhost:44311/api/services/app/Course/GetAllByFacultyId?id=${facultyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        dispatch(getCourseRequestAction(data.result));
        console.log("courses in faculty::", data.result);
      } else {
        message.error("Failed to get course");
      }
    } catch (error) {
      console.log("Error getting course:", error.message);
    }
  };
  // [LIST_MODULES_REQUEST_ACTION]
  const listModules = async (courseId: string) => {
    try {
      console.log("ID of course", courseId);
      const response = await api.get(
        `https://localhost:44311/api/services/app/Module/GetModulesByCourseId?courseId=${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        dispatch(listModulesRequestAction(data.result));
        console.log("index modules list::", data.result);
      } else {
        message.error("Failed to get course");
      }
    } catch (error) {
      console.log("Error getting course:", error.message);
    }
  };
  // [LIST_MODULES_REQUEST_ACTION]
  const getAllModules = async () => {
    try {
      const response = await api.get(
        `https://localhost:44311/api/services/app/Module/GetAll`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        dispatch(listModulesRequestAction(data.result.items));
        console.log("index modules list::", data.result);
      } else {
        message.error("Failed to get course");
      }
    } catch (error) {
      console.log("Error getting course:", error.message);
    }
  };

  // Creating a provider component
  return (
    <CourseStateContext.Provider value={state}>
      <CourseActionContext.Provider
        value={{
          createCourse,
          deleteCourse,
          getCourse,
          getCoursesTotalCount,
          listCourses,
          updateCourse,
          listModules,
          getAllModules,
        }}
      >
        {children}
      </CourseActionContext.Provider>
    </CourseStateContext.Provider>
  );
};

function useCourseState() {
  const context = useContext(CourseStateContext);
  if (!context) {
    throw new Error("useCourseState must be used within a CourseProvider");
  }
  return context;
}

function useCourseAction() {
  const context = useContext(CourseActionContext);
  if (context === undefined) {
    throw new Error("useCourseAction must be used within a CourseProvider");
  }
  return context;
}

function useCourse() {
  return {
    ...useCourseState(),
    ...useCourseAction(),
  };
}

export { CourseProvider, useCourse };
