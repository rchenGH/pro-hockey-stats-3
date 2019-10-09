import React, {Fragment, Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SeasonStats from './seasonStats/SeasonStats';
import Spinner from '../../layout/common/Spinner';
import {getPlayer} from '../../../actions/stats';
import axios from 'axios'
import { get } from 'http';


class PlayerDetails extends Component {

    componentDidMount(){
        const { getPlayer } = this.props
            getPlayer(window.location.pathname)
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
