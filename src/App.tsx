import React from 'react';
import logo from './logo.svg';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Top from "containers/Top";
import PublicRoom from "containers/PublicRoom";
import PrivateRoom from "containers/PrivateRoom";

import './App.css';

function App() {
  return (
    <>
    <CssBaseline />
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Top} />
            <Route path='/public_room' component={PublicRoom} />
            <Route path='/private_room' component={PrivateRoom} />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
