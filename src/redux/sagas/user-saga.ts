import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_USERS} from '../types';

const API_URL: string = `https://jsonplaceholder.typicode.com/users`;

export interface UserInterface {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

function getApi(): Promise<UserInterface> {
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
    const users: Array<UserInterface> = yield call(getApi);
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
