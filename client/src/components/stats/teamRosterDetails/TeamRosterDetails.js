import React, {Component, Fragment, useEffect} from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, Col, Container, Row, Table } from 'reactstrap';
import { getRoster } from '../../../actions/stats';
import './teamrosterdetails.css';

function TeamRosterDetails(props){

    useEffect(() => {
       getRoster();
    }, [getRoster]);

    const { roster = [] } = props.stats.stats.roster

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

    console.log('roster array ', rosterArray)


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
                                    <td className="table-data">{player.person.fullName}</td>
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

const mapStateToProps = state => ({
    stats: state
})
export default connect(mapStateToProps, {getRoster})(TeamRosterDetails);