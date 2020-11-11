import {GET_USERS} from '../types';

interface GetUsersActionType {
  type: typeof GET_USERS.REQUESTED,
    payload: any
}

export const getUsers = (users: any): GetUsersActionType => {
  return {
    type: GET_USERS.REQUESTED,
    payload: users
  };
};
