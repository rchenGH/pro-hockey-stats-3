import React, {Component} from 'react';
import NavigationBar from './components/layout/navigation/Navigation';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About'
import Footer from './components/layout/footer/Footer';
import './components/layout/background/background.css';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      portfolio: {
        home: {
          backend: null
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
              <Route exact
                path='/'
                component={Home}
              />
              <Route 
                path='/home'
                render={(RouteProps) => (
                  <Home {...RouteProps}  />
                )}
              />
              <Route path='/about'
                component={About}
              />
          </div>
        </div>
        <Footer/>

      </Router>
    )
  }

}


export default App;
