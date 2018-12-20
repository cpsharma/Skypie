import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE, SET_EDIT_MESSAGE_ID, SEND_EDIT_MESSAGE } from "../constants/action-types";

export const setActiveUserIdAction = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});

export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
})

export const sendMessage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
})

export const setEditMessageId = (messageNumber) => ({
    type: SET_EDIT_MESSAGE_ID,
    payload: messageNumber

})

export const sendEditedMessage = (messageText, usrId, editMessageId) => ({
    type: SEND_EDIT_MESSAGE,
    payload: {
        messageText,
        usrId,
        editMessageId
    }
})