import React, {Fragment } from 'react';
import Navigation from './components/layout/navigation/Navigation';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const App = () => 
    <Router>
      <Navigation/>
    </Router>

export default App;
