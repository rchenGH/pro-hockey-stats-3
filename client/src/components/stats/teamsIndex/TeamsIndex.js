import React, {Fragment, useEffect} from 'react';
import './teamindex.css';
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../layout/common/Spinner';
import { getTeams } from '../../../actions/stats';
import TeamsList from '../teamsList/TeamsList';


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

    return loading ? <Spinner/> : (
            <Fragment>
                <Container className="index-container">
                    <Row className="index-row">
                        <TeamsList teams={teamsArray} />
                    </Row>               
                </Container>
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