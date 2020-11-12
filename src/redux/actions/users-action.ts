import {GET_USERS} from '../types';
import {UserInterface} from "../sagas/user-saga";

type GetUsersActionType = {
  type: typeof GET_USERS.REQUESTED,
  payload: Array<UserInterface>
}

export const getUsers = (users: Array<UserInterface>): GetUsersActionType => {
  return {
    type: GET_USERS.REQUESTED,
    payload: users
  };
};
