import React, {Component} from 'react';
import NavigationBar from './components/layout/navigation/Navigation';
import Footer from './components/layout/footer/Footer'
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
        <div className="App hockey-background"
            style={{backgroundColor: "rgba(59,59,59,1)", paddingTop:'5px', width: '100vw', paddingBottom:'50px'}}
        >
          <div className="routes">
            <NavigationBar/>
          </div>
        </div>
        <Footer/>

      </Router>
    )
  }

}


export default App;
