import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_USERS} from '../types';

const API_URL: string = `https://jsonplaceholder.typicode.com/users`;

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
      type: GET_USERS.SUCCESS,
      users
    });
  } catch (error) {
    yield put({
      type: GET_USERS.FAILED,
      message: error.message
    });
  }
}

function* userSaga() {
  yield takeEvery(GET_USERS.REQUESTED, fetchUsers);
}

export default userSaga;
