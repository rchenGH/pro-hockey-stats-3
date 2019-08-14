import React, {Component} from 'react';
import NavigationBar from './components/layout/navigation/Navigation';
import './components/layout/background/background.css';
import './App.css';

import {
  BrowserRouter as Router,
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      portfolio: {
        home: {
          backend : null
        }
      },
    }
  }

  render(){
    return (
      <Router>
        <div className="App hockey-background">
          <div className="routes">
            <NavigationBar/>
          </div>
        </div>
      </Router>
    )
  }

}


export default App;
