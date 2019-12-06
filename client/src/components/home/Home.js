import React, {Component} from 'react';
import { connect } from 'react-redux';
// import downarrow from './down-arrow.svg'
// import uparrow from './up-arrow.svg'
import './home.css'

class Home extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){

    return(

      <div className='home'>
        <h1 class="title">HOME PAGE UNDER CONSTRUCTION</h1>
      </div>

    )
  }
}

const mapStateToProps = state => { 
  return state; 
};

export default connect(mapStateToProps)(Home)
