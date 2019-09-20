import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../layout/common/Spinner';
import { getTeams } from '../../../actions/stats';

const TeamsIndex = ({getTeams, stats: {teams, loading } }) => {

    useEffect(() => {
        getTeams();
    }, [getTeams]);

    let teamsArray = [];



    for(let i=0; i < teams.length; i++){
        teamsArray.push(teams[i])
    }
     teamsArray.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

    console.log('sorted teams array ', teamsArray)


    return loading ? <Spinner/> : (
            <Fragment>
                {
                    teamsArray.map(team => (
                        <div key={team.id}>
                            {team.name}
                        </div>
                    ))
                }
            </Fragment>
        )
}

TeamsIndex.propsTypes = {
    getTeams: PropTypes.func.isRequired,
    teams: PropTypes.object.isRequired
}

const mapStateToProps = state => { 
    return { stats: state.stats }; 
};

export default connect(mapStateToProps, { getTeams })(TeamsIndex);