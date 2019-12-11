import React, {Component, Fragment} from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
import './navigation.css'
import './dropdown.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';
import  HockeyLogo  from '../logo/Logo';


class NavigationBar extends Component {
  
  constructor(props) {
    // { auth: {isAuthenticated, loading}, logout}
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    const { auth } = this.props

    const authLinks = (
      <Fragment>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className="navigation-expanded-list-item">
              STATS
            </DropdownToggle>
            <DropdownMenu right className="dropdown-ul">    
              <DropdownItem>
                <Link to="teamsPage">
                  <li className="dropdown-list-item">
                    TEAMS
                  </li>
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        <li className="navigation-expanded-list-item">
          <a onClick={this.props.logout} href="#!" > 
          <i/>{' '}
          <span>LOGOUT</span>
          </a>
        </li>
      </Fragment>
    )

    const guestLinks = (
      <Fragment>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret className="navigation-expanded-list-item">
            STATS
          </DropdownToggle>
          <DropdownMenu right className="dropdown-ul">    
            <DropdownItem>
              <Link to="/teamsPage">
                <li className="dropdown-list-item">
                   TEAMS
                </li>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
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
      </Fragment>
    )

    return (
      <div>
        <Navbar expand="md" fixed="top">
          <Link to="/home">
            <HockeyLogo/>
          </Link>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Link to="/home">
                <li className="navigation-expanded-list-item">
                  HOME
                </li>
              </Link>
              { !auth.loading && (<Fragment>{ auth.isAuthenticated ? authLinks : guestLinks }</Fragment>)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(NavigationBar);