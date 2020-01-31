import React from 'react';
import {Switch, Route} from "react-router-dom";
import NewProject from './NewProject';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
        <div className="App">
          <Switch>

            <Route path="/newProject" render={ () => (
              <NewProject
              />)}
            />

          </Switch>
        </div>
    );
  }
}

export default App;


    //
    // <Route path="/home" render={ () => (
    //   <Home
    //   />)}
    // />
