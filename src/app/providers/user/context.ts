
import { createContext } from "react";
import { LoginRequest, PersonDto, STPersonDto } from "../../interfaces";

export const INITIAL_STATE: IUserStateContext = {};

export interface IUserStateContext {
  readonly UserLogin?: LoginRequest;
  readonly CreateStudent?: STPersonDto;
  readonly CreateLecturer?: STPersonDto;
  readonly LogUserOut?: PersonDto;
  readonly UserDetails?: STPersonDto;
}

export interface IUserActionContext {
  loginUser?: (payload: LoginRequest) => void;
  logOutUser?:() => void;
  createStudent?: (payload: any) => void;
  createLecturer?: (payload: any) => void;
  getUserDetails?: () => void;
}

const UserContext = createContext<IUserStateContext>(INITIAL_STATE);

const UserActionContext = createContext<IUserActionContext | undefined>(
  undefined
);

export { UserContext, UserActionContext };
