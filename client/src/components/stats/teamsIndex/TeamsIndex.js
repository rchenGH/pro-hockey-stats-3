import React, {Fragment, useEffect} from 'react';
import './teamindex.css';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
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

    return loading ? <Spinner/> : (
            <Fragment>
                <Container>
                    <Row>
                        {
                            teamsArray.map(team => (
                                <Col key={team.id} xs="12" sm="6" md="4" lg="3"> 
                                    <Link to="">
                                        <Card body className="team-card">
                                            <CardTitle>{team.name}</CardTitle>
                                        </Card>
                                    </Link>
                                </Col>
                            ))
                        }
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