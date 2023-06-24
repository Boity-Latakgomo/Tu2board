import React, { useReducer, useContext, FC, PropsWithChildren, useEffect } from "react";
import { UserReducer } from "./reducer";
import { INITIAL_STATE, UserActionContext, UserContext } from "./context";
import {
  createLecturerRequestAction,
  createStudentRequestAction,
  getUserDetailsRequestAction,
  logOutUserRequestAction,
  loginUserRequestAction,
} from "./action";
import api from "../../api";
import { LoginRequest, STPersonDto } from "../../interfaces";
import { message } from "antd";

const UserProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  const token = "localStorage.getItem";
  const localhost = "https://localhost:44311/api/";

  //[LOGIN]
  const loginUser = (userLoginInfo: LoginRequest) => {
    api
      .post("https://localhost:44311/api/TokenAuth/Authenticate", userLoginInfo)
      .then((response) => {
        if (response.data.success) {
          dispatch(loginUserRequestAction(response.data.result));
          localStorage.setItem("token", response.data.result.accessToken);
          localStorage.setItem("loginStatus", response.data.success);
          window.location.href = "/home";
        }
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        console.log("logged in");
      });
  };



  //[CREATE_USER]
  const createStudent = (userRegInfo: STPersonDto) => {
    api
      .post(
        "https://localhost:44311/api/services/app/Student/Create",
        userRegInfo
      )
      .then((response) => {
        if (response.data.success) {
          dispatch(createStudentRequestAction(userRegInfo));
          localStorage.setItem("personId", userRegInfo.id);
          console.log("success");
          window.location.href = "/login";
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  //[CREATE_USER]
  const createLecturer = (userRegInfo: STPersonDto) => {
    api
      .post(
        "https://localhost:44311/api/services/app/Lecturer/Create",
        userRegInfo
      )
      .then((response) => {
        if (response.data.success) {
          dispatch(createLecturerRequestAction(userRegInfo));
          localStorage.setItem("personId", userRegInfo.id);
          console.log("success");
          window.location.href = "/login";
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

    // [GET_USER_DETAILS_ACTION]
    const getUserDetails = async () => {
      try {
        
        const response = await api.get(
          `https://localhost:44311/api/services/app/Student/GetStudentLoggedIn`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
  
        if (response.status === 200) {
          const data = response.data;
          dispatch(getUserDetailsRequestAction(data.result));
          console.log("index user details::", data.result);
        } else {
          message.error("Failed to get user");
        }
      } catch (error) {
        console.log("Error getting user:", error.message);
      }
    };

    useEffect(() => {
      getUserDetails()
    }, [])
    

  //[LOGIN]
  const logOutUser = () => {
    dispatch(logOutUserRequestAction());
    localStorage.removeItem("token");
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <UserContext.Provider value={state}>
      <UserActionContext.Provider
        value={{
          loginUser,
          createStudent,
          createLecturer,
          logOutUser,
          getUserDetails
        }}
      >
        {children}
      </UserActionContext.Provider>
    </UserContext.Provider>
  );
};

function useLoginState() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
  return context;
}

function useLoginActions() {
  const context = useContext(UserActionContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
  return context;
}

function useUser() {
  return {
    ...useLoginActions(),
    ...useLoginState(),
  };
}
export { UserProvider, useUser };
