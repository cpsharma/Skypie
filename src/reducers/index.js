import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId"
import { combineReducers } from "redux";
import messages from "./messages";
import typing from "./typing";
import editMessageId from "./editMessageId"

export default combineReducers({
    user,
    messages,
    contacts,
    activeUserId,
    typing,
    editMessageId
});