import React from "react";
import store from "../store/Store";
import { setTypingValue, sendMessage, sendEditedMessage } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ value }) => {
    const state = store.getState();
    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { typing, activeUserId, editMessageId } = state;
        if (!editMessageId) {
            store.dispatch(sendMessage(typing, activeUserId));
        } else {
            store.dispatch(sendEditedMessage(typing, activeUserId, editMessageId));
        }
    }

    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="write a message"
            />
        </form>
    );
};

export default MessageInput;