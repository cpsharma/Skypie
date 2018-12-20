import React, { Component } from "react";
import "./Chats.css";
import store from "../store/Store";
import { setTypingValue, setEditMessageId } from "../actions";

const Chat = ({ message }) => {
    const { text, is_user_msg, number } = message;
    //const { activeUserId } = state;
    const handleEdit = () => {
        store.dispatch(setEditMessageId(number));
        store.dispatch(setTypingValue(text));
    };
    return (
        <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`} onClick={is_user_msg ? handleEdit : () => { }}> {text}</span >
    );
};

class Chats extends Component {

    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();
    }
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    };
    render() {
        return (
            <div className="Chats" ref={this.chatsRef}>
                {this.props.messages.map(message => (
                    <Chat message={message} key={message.number} />
                ))}
            </div>
        );
    }
}

export default Chats;