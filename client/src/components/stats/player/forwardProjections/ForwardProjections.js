import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Spinner from '../../../layout/common/Spinner';

const ForwardProjections = (props) => {

    const { loading } = props.stats;
    const { splits, people, currentTeam, primaryPositionType} = props.stats;
    const { shotsTotal, goalsTotal, assistsTotal, pointsTotal, gamesTotal } = props

    // goals, points, assists, shots, age


    console.log('current age ', people.currentAge)
  
    let averageShotPercentage = goalsTotal/shotsTotal;
    let averageShotsPerSeason = shotsTotal/gamesTotal;
    let averageAssistsPerGame = assistsTotal/gamesTotal;

    let assistsPer82 = averageAssistsPerGame * 82
    let shotsPer82 = averageShotsPerSeason * 82
    let goalsPer82 = shotsPer82 * averageShotPercentage

    let pointsPer82 = (goalsPer82 + assistsPer82)
    
    let avgShotPercentage = averageShotPercentage*100
    let pointsPer82Projection

    if(people.currentAge < 28){
        pointsPer82Projection = pointsPer82 * 1.05
    } else if ( people.currentAge === 30) {
        pointsPer82Projection = pointsPer82
    } else if (people.currentAge > 31 && people.currentAge <34){
    pointsPer82Projection =  pointsPer82 * 0.97
    } else {
    pointsPer82Projection =  pointsPer82 * 0.95
    }
    

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
                            <td>{goalsPer82.toFixed(2)}</td>
                            <td>{assistsPer82.toFixed(2)}</td>
                            <td>{pointsPer82Projection.toFixed(2)}</td>
                            <td>{shotsPer82.toFixed(2)}</td>
                            <td>{avgShotPercentage.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Fragment>
        )
    )
}

export default ForwardProjections