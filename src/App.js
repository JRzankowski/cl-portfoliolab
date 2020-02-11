import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import './scss/main.scss'



function App() {
  return (
    <div className="App">
        <Router>
                <Route exact path="/">
                    <Home/>
                </Route>
        </Router>
    </div>
  );
}

export default App;
