import React, { Fragment, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Table } from 'reactstrap';
import { getPlayer } from '../../../actions/stats';
import { Link } from 'react-router-dom';
import './teamrosterdetails.css';



const TeamRosterDetails = ({getPlayer, stats}) =>{

    useEffect(() => {
       getPlayer();
    }, [getPlayer]);

    const { roster = [] } = stats.roster

    let rosterArray = [];

    for(let i = 0; i< roster.length; i++){
        rosterArray.push(roster[i]);
    }

    rosterArray.sort(function(a, b){
        const lastNameSort1 = a.person.fullName.split(' ')[1]
        const lastNameSort2 = b.person.fullName.split(' ')[1]

        if(lastNameSort1 < lastNameSort2) { return -1; }
        if(lastNameSort1 > lastNameSort2) { return 1; }
        return 0;
    })

    return(
        <Fragment>
            <Container className="team-rosters-details-container" style={{marginLeft:"auto", marginRight:"auto"}}>
                <Row>
                    <Table className="roster-table">
                    <thead>
                        <tr className="table-head-row">
                            <th className="number">NUMBER</th>
                            <th className="player">PLAYER</th>
                            <th className="position">POSITION</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {
                            rosterArray.map(player => (
                                <tr className="table-row" scope="row" key={player.person.id}>
                                    <td className="table-data">{player.jerseyNumber}</td>
                                    <td className="table-data full-name" >
                                        <Link to={`${player.person.fullName.split(" ").join("").toLowerCase()}`} 
                                            onClick={ () => getPlayer(stats.team, player.person.fullName.split(" ").join("").toLowerCase()) }>
                                            {player.person.fullName}
                                        </Link>
                                    </td>
                                    <td className="table-data">{player.position.code}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </Table>
                </Row>
            </Container>
        </Fragment>
    )
}

TeamRosterDetails.propTypes = {
    stats: PropTypes.object.isRequired,
    getPlayer: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {stats: state.stats}
}

export default connect(mapStateToProps, {getPlayer})(TeamRosterDetails);