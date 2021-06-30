import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cheatsheet from './Components/Cheatsheet';

import './styling/App.css';
import Home from './Components/Home'
//import Navbar from './Components/Navbar'



function App() {
  return (
    <Router>
    <Switch>
        <div className="App">

            {/* <header> <Navbar/> </header> */}


            {/* Body */}
            <div className="container-fluid body">
              <div className="row content">

                  {/* Main content*/}
                  <div className="main-container">
                      <Route exact path="/" component={Home} />
                      <Route exact path="/cheatsheet" component={Cheatsheet} />
                  </div>
              </div>
            </div>
        </div>
    </Switch>
  </Router>
  );
}

export default App;
