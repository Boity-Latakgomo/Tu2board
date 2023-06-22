import { UserActionEnum } from "../../enums";
import { IUserStateContext } from "./context";

export function UserReducer(
  incomingState: IUserStateContext,
  action: ReduxActions.Action<IUserStateContext>
): IUserStateContext {
  const { type, payload } = action;

  switch (type) {
    case UserActionEnum.loginUserRequest:
      return { ...incomingState, ...payload };
    case UserActionEnum.logOutUserRequest:
      return { ...incomingState, ...payload };
    case UserActionEnum.createStudentRequest:
      return { ...incomingState, ...payload };
    case UserActionEnum.createLecturerRequest:
      return { ...incomingState, ...payload };
    default:
      return incomingState;
  }
}
