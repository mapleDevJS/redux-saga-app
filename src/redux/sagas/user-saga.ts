import {call, put, takeEvery} from 'redux-saga/effects';

const API_URL = `https://jsonplaceholder.typicode.com/users`;

function getApi() {
  return fetch(API_URL, {
    method: `GET`,
    headers: {
      'Content-Type': `application/json`,
    }
  }).then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchUsers() {
  try {
    const users = yield call(getApi);
    yield put({
      type: `GET_USERS_SUCCESS`,
      users
    });
  } catch (error) {
    yield put({
      type: `GET_USERS_FAILED`,
      message: error.message
    });
  }
}

function* userSaga() {
  yield takeEvery(`GET_USERS_REQUESTED`, fetchUsers);
}

export default userSaga;
