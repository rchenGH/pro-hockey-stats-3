import React, {Component} from 'react';
import NavigationBar from './components/layout/navigation/Navigation';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import About from './components/about/About'
import Footer from './components/layout/footer/Footer';
import './components/layout/background/background.css';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { data: null }
  }

  render(){
    return (
      // <Provider store={ store }>
        <Router>
          <div className="App hockey-background"
              style={{backgroundColor: "rgba(59,59,59,1)", paddingTop:'5px', width: '100vw', paddingBottom:'50px'}}
              >
              <div className="routes">
                <NavigationBar/>
                <Switch>
                  <Route exact
                    path='/'
                    component={() => <Home /> }
                  />
                  <Route 
                    exact 
                    path='/home'
                    component={() => <Home data={this.state.data}/>}
                  />
                  <Route 
                    exact
                    path='/register'
                    component={() => <Register /> }
                  />
                  <Route 
                    exact
                    path='/login'
                    component={() => <Login /> }
                  />
                  <Route path='/about'
                     component={() => <About /> }
                  />
                </Switch>

            </div>
          </div>
          <Footer/>

        </Router>
      // </Provider>

    )
  }

}


export default App;
