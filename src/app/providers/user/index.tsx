import React, { useReducer, useContext, FC, PropsWithChildren } from "react";
import { UserReducer } from "./reducer";
import { INITIAL_STATE, UserActionContext, UserContext } from "./context";
import {
  createLecturerRequestAction,
  createStudentRequestAction,
  logOutUserRequestAction,
  loginUserRequestAction,
} from "./action";
import api from "../../api";
import { LoginRequest, STPersonDto } from "../../interfaces";
import { headers } from "next/dist/client/components/headers";

const UserProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  //[LOGIN]
  const loginUser = (userLoginInfo: LoginRequest) => {
    api
      .post("https://localhost:44311/api/TokenAuth/Authenticate", userLoginInfo)
      .then((response) => {
        if (response.data.success) {
          console.log("Login successful");
          dispatch(loginUserRequestAction(response.data.result));
          localStorage.setItem("token", response.data.result.accessToken);
          localStorage.setItem("loginStatus", response.data.success);
          window.location.replace("/home");
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
          localStorage.setItem("personId", userRegInfo.id ?? ""); // Check
          console.log("success");
          console.log("Student created");
          window.location.replace("/home");
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
          localStorage.setItem("personId", userRegInfo.id ?? ""); // Check
          console.log("success");
          console.log("Lecture created");
          window.location.replace("/home");
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  //[LOGIN]
  const logOutUser = () => {
    dispatch(logOutUserRequestAction());
    localStorage.removeItem("token");
    localStorage.clear();
    console.log("User logged in");
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
