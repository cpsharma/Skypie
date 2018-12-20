import { SET_EDIT_MESSAGE_ID } from "../constants/action-types";


export default function editMessageId(state = null, action) {
    switch (action.type) {
        case SET_EDIT_MESSAGE_ID:
            return action.payload;
        default:
            return state;
    }
}