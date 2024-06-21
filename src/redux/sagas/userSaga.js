import { call, put, takeEvery } from 'redux-saga/effects';

const API_URL = 'https://jsonplaceholder.typicode.com/users';
const REQUEST_HEADERS = {
    'Content-Type': 'application/json',
};

async function fetchUsersFromApi() {
    const response = await fetch(API_URL, {
        method: 'GET',
        headers: REQUEST_HEADERS,
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
}

function* fetchUsers(action) {
    try {
        const users = yield call(fetchUsersFromApi);
        yield put({ type: 'GET_USERS_SUCCESS', users });
    } catch (error) {
        yield put({ type: 'GET_USERS_FAILED', message: error.message });
    }
}

function* userSaga() {
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;