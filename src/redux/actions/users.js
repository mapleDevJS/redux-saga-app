import * as type from '../types';

export function getUsers(users) {
    return {
        type: type.GET_USERS.REQUESTED,
        payload: users
    }
}