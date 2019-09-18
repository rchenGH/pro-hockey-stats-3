import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTeams } from '../../../actions/stats';

const TeamsIndex = ({getTeams, stats }) => {

    useEffect(() => {
        getTeams();
    }, [getTeams], console.log('in use effect ', stats));

    return (
        <div/>
    )
}

TeamsIndex.props = {
    getTeams: PropTypes.func.isRequired,
    teams: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    stats: state.stats
}, console.log('state in teams index ', state.stats.teams))

export default connect(mapStateToProps, { getTeams })(TeamsIndex);