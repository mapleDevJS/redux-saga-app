import * as type from "../types";

const innitialState = {
    users: []
}

export default function users(state = innitialState, action) {
    switch (action.type) {
        case type.GET_USERS:
            return {
                ...state,
                users: action.payload
            }

            default:
                return state
    }
}