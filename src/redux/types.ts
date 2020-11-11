interface GetUsersAction {
  REQUESTED: string;
  SUCCESS: string;
  FAILED: string;
}

export const GET_USERS: GetUsersAction = {
  REQUESTED: `GET_USERS_REQUESTED`,
  SUCCESS: `GET_USERS_SUCCESS`,
  FAILED: `GET_USERS_FAILED`
};
