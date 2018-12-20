import React from 'react';
import './App.css';
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import store from "../store/Store";
import _ from 'lodash'

const App = () => {
  const { user, contacts, activeUserId } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );

}

export default App;
