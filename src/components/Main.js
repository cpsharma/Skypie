import React from "react";
import "./Main.css";
import Empty from "../components/Empty"
import ChatWindow from "../containers/ChatWindow"

const Main = ({ user, activeUserId, messages }) => {
    const renderMainComponent = () => {
        if (!activeUserId) {
            return <Empty user={user} activeUserId={activeUserId} />
        } else {
            return <ChatWindow user={user} activeUserId={activeUserId} />
        }
    }
    return <main className="Main">{renderMainComponent()}</main>;
};

export default Main;