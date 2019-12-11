import React, {Fragment, Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SeasonStats from './seasonStats/SeasonStats';
import {getPlayer} from '../../../actions/stats';
import '../player/player.css'

class PlayerDetails extends Component {

    componentDidMount(){
        let playerURLArray = window.location.pathname.split('/');
        playerURLArray.shift();

        let team = playerURLArray[1]
        let player = playerURLArray[3]

        const { getPlayer } = this.props
        getPlayer(team, player)
    }

    render(){
        return (
            <Fragment>
                <SeasonStats {...this.props} />
            </Fragment>
        )
    }
}

PlayerDetails.propTypes = {
    stats: PropTypes.object.isRequired
}

const mapStateToProps = state => { 
    return state; 
};

export default connect(mapStateToProps, {getPlayer})(PlayerDetails)
