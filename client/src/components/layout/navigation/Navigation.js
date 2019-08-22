import React, {Component} from 'react';
import './navigation.css'
import { Link } from 'react-router-dom';

import logo from '../background/Logo.png'

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

  closeMenu = (event) => {
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
            <Link to="/login">
              <li className="navigation-expanded-list-item">
                LOGIN
              </li>
            </Link>
            <Link to="/register">
              <li className="navigation-expanded-list-item">
                REGISTER
              </li>
            </Link>
            <Link to="/home">
              <li className="navigation-expanded-list-item">
                HOME
              </li>
            </Link>


          </ul>
        </nav>

        <nav className="navigation-collapsed">
          <Link to="/home">
            <img src={logo} className="logo-collapsed"/>
          </Link>
          <button className="navigation-button" onClick={this.showMenu}>
            MENU
          </button>
            {
              this.state.showMenu ?
              (
                <div className="navigation-menu"
                  ref={(element) => {this.dropdownMenu = element;}}
                >
                  <ul className="navigation-collapsed-list">
                  <Link to="/home">
                      <li className="navigation-collapsed-list-item">
                        HOME
                      </li>
                    </Link>
                    <Link to="/register">
                      <li className="navigation-collapsed-list-item">
                        REGISTER
                      </li>
                    </Link>
                    <Link to="/login">
                      <li className="navigation-collapsed-list-item">
                        LOGIN
                      </li>
                    </Link>
                  </ul>
                </div>
              ) :
              ( null)
            }
        </nav>
      </div>
    )
  }
    
  
}

export default NavigationBar;