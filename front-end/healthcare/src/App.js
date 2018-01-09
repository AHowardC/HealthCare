// 3rd party modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Form, FormGroup, ControlLabel, FormControl, Button, Col} from 'react-bootstrap';



// Custom Components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Register from './components/Register';
import SlickSlider from './components/SlickSlider';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <div className='app-body'>
            {/* <Route exact path='/' component={SlickSlider} /> */}
            <div className='container'>
              <Route exact path='/' component={Home} />
              <Route exact path='/' component={Register} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
