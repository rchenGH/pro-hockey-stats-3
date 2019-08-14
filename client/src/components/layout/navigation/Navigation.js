import React, {Component} from 'react';
import './navigation.css'
import {
  Link
} from 'react-router-dom';

import logo from '../background/logo.png'

class NavigationBar extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    }
  }

  showMenu = (event) => {
    event.preventDefault();
    this.setState(
      {showMenu: true},
      () => {
        document.addEventListener('click', this.closeMenu)
      });
  }

  closeMenu(event){
    if(!this.dropdownMenu.contains(event.target)){
      this.setState(
        {showMenu: false},
        () => {
          document.removeEventListener('click', this.closeMenu);
        }
      )
    }
  }

  render(){
    return(
      <div>
        <nav className="navigation-expanded">
          <ul className="navigation-expanded-list">
            <Link to="/home">
              <img src={logo} className="logo-expanded"/>
            </Link>
          </ul>
        </nav>

        <nav className="navigation-collapsed">

        </nav>
      </div>
    )
  }
    
  
}

export default NavigationBar;