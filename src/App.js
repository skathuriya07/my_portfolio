import React, { Component } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Internship from './Internship';
import Industry from './IndustryProject';
import Activity from './Activity';
import About from './About';
import Projects from './Projects';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter  basename="/">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route exact path="/home"  component={Home} />
            <Route exact path="/internship"  component={Internship} />
            <Route exact path="/industry"  component={Industry} />
            <Route exact path="/activity"  component={Activity} />
            <Route exact path="/about"  component={About} />
            <Route exact path="/project"  component={Projects} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;