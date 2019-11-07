import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Spinner from '../../../layout/common/Spinner';

const ForwardProjections = (props) => {

    const { loading } = props.stats;
    const { splits, people, currentTeam, primaryPositionType} = props.stats;
    const { shotsTotal } = props

    console.log('shotsTotal ', shotsTotal)

    // goals, points, assists, shots, age


    console.log('people in forward projections ', people.currentAge)

    return (
        loading ? <Spinner/> : (
        <Fragment>
            <div className="projection-details container" style={{marginLeft:"auto", marginRight:"auto"}}>
                 <div className="row">
                    <div className="details-name" style={{minWidth: "300px"}}>
                        <div className="span-name">Projections</div>
                    </div>
                </div> 
                {!primaryPositionType === 'Goalie'}
                <Table>
                    <thead>
                        <tr>
                            <th className="next-season">NEXT 82 GAMES</th>
                            <th className="projected-goals">PROJECTED GOALS</th>
                            <th className="projected-assists">PROJECTED ASSISTS</th>
                            <th className="projected-points">PROJECTED POINTS</th>
                            <th className="projected-shots">PROJECTED SHOTS</th>
                            <th className="projected-shot-percentage">PROJECTED SHOT %</th>
                        </tr>
                    </thead>
                    <tbody className="ProjectionsList">
                        <tr>
                            <td>--</td>
                            {/* <td>{projectedPrimaryStats(totalGoals ,'goals')}</td>
                            <td>{projectedPrimaryStats(totalAssists, 'assists')}</td>
                            <td>{projectedPrimaryStats(totalPoints, 'points')}</td>
                            <td>{projectedPrimaryStats(totalShots, 'shots')}</td>
                            <td>{(projectedPrimaryStats(totalGoals ,'goals')/projectedPrimaryStats(totalShots, 'shots')).toFixed(3)}</td> */}
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Fragment>
        )
    )
}

export default ForwardProjections