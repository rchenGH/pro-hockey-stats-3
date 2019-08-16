import React, {Component} from 'react';
import playerbackground from './hockey-player-background.png'
import downarrow from './down-arrow.svg'
import uparrow from './up-arrow.svg'

class Home extends Component {
  constructor(props){
    super(props);

  }

  render(){

    return(

      <div className='home top-10-header-row'>
        {/* <div className="player-background" style={{backgroundColor: 'rgba(59,59,59,1)'}}> */}

          {/* <div className="top-10-header-div">
            <p className="top-10-header">TOP 10 CURRENT PLAYERS</p>
            <img src={playerbackground} className='playerbackground'></img>
          </div> */}

          {/* <div className="top-10-card" style={{height: "auto"}}> */}
            {/* <div className="container">
              <div className="row top-10-row">
                <div className="col-md-1 column">
                  <h2 className="top-10-number-header">RANK</h2>
                </div>
                <div className="col-md-5 column">
                  <h2 className="top-10-name-header">PLAYER</h2>
                </div>
                <div className="col-md-3 column">
                  <h2 className="top-10-points-header">POINTS</h2>
                </div>
                <div className="col-md-3 column">
                  <h2 className="top-10-season-header">PPGA SINCE LAST SEASON</h2>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>

    )
  }
}

export default Home
