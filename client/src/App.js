import React, { useEffect } from 'react';
import NavigationBar from './components/layout/navigation/Navigation';
import {Route, Switch } from 'react-router-dom'
import Home from './components/home/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import About from './components/about/About';
import TeamsIndex from './components/stats/teamsIndex/TeamsIndex'
import TeamRosterDetails from './components/stats/teamRosterDetails/TeamRosterDetails';
import PlayerDetails from './components/stats/player/PlayerDetails';
import Alert from './components/layout/alert/Alert';
import Footer from './components/layout/footer/Footer';
import './components/layout/background/background.css';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  

  return (
      <Provider store={ store }>
        {/* <Router> */}
          <div className="App hockey-background"
              style={{backgroundColor: "rgba(59,59,59,1)", paddingTop:'5px', width: '100vw'}}
              >
              <div className="routes">
                <NavigationBar/>
                <Alert />
                <Switch>
                  <Route exact
                    path='/'
                    component={() => <Home /> }
                  />
                  <Route 
                    exact 
                    path='/home'
                    component={() => <Home />}
                  />
                  <Route 
                    exact 
                    path='/teamsPage'
                    component={() => <TeamsIndex />}
                  />
                  <Route 
                    exact 
                    path='/teamsPage/:team/roster'
                    component={() => <TeamRosterDetails />}
                  />
                  <Route 
                    exact 
                    path='/teamsPage/:team/roster/:player'
                    component={() => <PlayerDetails />}
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

        {/* </Router> */}
      </Provider>
  )}



export default App
