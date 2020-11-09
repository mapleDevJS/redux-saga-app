interface GetUsers {
  REQUESTED: string;
  SUCCESS: string;
  FAILED: string;
}

export const GET_USERS: GetUsers = {
  REQUESTED: `GET_USERS_REQUESTED`,
  SUCCESS: `GET_USERS_SUCCESS`,
  FAILED: `GET_USERS_FAILED`
};
