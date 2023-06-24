import { UserActionEnum } from "./../../enums/index";
import { createAction } from "redux-actions";
import { IUserStateContext } from "./context";
import {
  LoginRequest,
  StudentDto,
  LecturerDto,
  STPersonDto,
} from "../../interfaces";

export const loginUserRequestAction = createAction<
  IUserStateContext,
  LoginRequest
>(UserActionEnum.loginUserRequest, (UserLogin) => ({ UserLogin }));
export const createStudentRequestAction = createAction<
  IUserStateContext,
  STPersonDto
>(UserActionEnum.createStudentRequest, (CreateStudent) => ({ CreateStudent }));
export const createLecturerRequestAction = createAction<
  IUserStateContext,
  STPersonDto
>(UserActionEnum.createLecturerRequest, (CreateLecturer) => ({
  CreateLecturer,
}));
export const getUserDetailsRequestAction = createAction<
  IUserStateContext,
  STPersonDto
>(UserActionEnum.createLecturerRequest, (UserDetails) => ({
  UserDetails,
}));
export const logOutUserRequestAction = createAction<IUserStateContext>(
  UserActionEnum.logOutUserRequest,
  () => ({})
);
