import React, {Fragment, Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Spinner from '../../../layout/common/Spinner'
import './seasonstats.css';
import axios from 'axios'

class SeasonStats extends Component {

    constructor(){
        super();
        this.state = {
            people: [],
            currentTeam: [],
            splits: []
        }
    };

    componentDidUpdate (prevProps) {
        const { player, team } = this.props.stats.stats

       
            axios.get(`/teams/${team}/roster/${player}`)
            .then(res => {
                if(player !== prevProps.stats.stats.player){
                this.setState ({
                    stats: res.data,
                    people: res.data.people[0],
                    currentTeam: res.data.people[0].currentTeam,
                    splits: res.data.people[0].stats[0].splits
                })
            }
            }).catch((err) => {
                console.log(err)
            })
    }
    
    render() {

        const splitYear = (year) => {
            let str = year.split('')
            str.splice(4, 0, '-')
            return str.join('')
          }

        const { loading } = this.props.stats.stats

        const { splits, people, currentTeam} = this.state

        console.log('this.state ', this.state)

        return (
            loading ? <Spinner /> : (
            <Fragment>
                <div className="PlayerDetails container" style={{marginLeft:"auto", marginRight:"auto"}}>

                <div className="row">
                    <div className="details-name" style={{minWidth: "300px"}}>
                        {currentTeam.name}
                    </div>
                    <div className="details-name" style={{minWidth: "300px"}}>
                        {people.fullName}
                    </div>
                </div>
                    <Table>
                        <thead>
                            <tr>
                                <th className="season">SEASON</th>
                                <th className="team">TEAM</th>
                                <th className="gp">GP</th>
                                <th className="g">G</th>
                                <th className="a">A</th>
                                <th className="pts">PTS</th>
                                <th className="plus_minus">+/-</th>
                                <th className="pim">PIM</th>
                                <th className="ppg">PPG</th>
                                <th className="ppg">PPA</th>
                                <th className="ppa">PPP</th>
                                <th className="sh">SHG</th>
                                <th className="gw">GWG</th>
                                <th className="s">S</th>
                                <th className="s_percentage">S%</th>
                            </tr>
                        </thead>
                        <tbody>            
                            {splits.map((split, index) => 
                                ( split.league.name === "National Hockey League" ?
                                <tr key={index} className="season-row">
                                    <td className="season">{splitYear(split.season)}</td>
                                    <td>{split.team.name}</td>
                                    <td>{split.stat.games}</td>
                                    <td>{split.stat.goals}</td>
                                    <td>{split.stat.assists}</td>
                                    <td>{split.stat.points}</td>
                                    <td>{split.stat.plusMinus}</td>
                                    <td>{split.stat.pim}</td>
                                    <td>{split.stat.powerPlayGoals}</td>
                                    <td>{split.stat.powerPlayPoints-split.stat.powerPlayGoals}</td>
                                    <td>{split.stat.powerPlayPoints}</td>
                                    <td>{split.stat.shortHandedGoals}</td>
                                    <td>{split.stat.gameWinningGoals}</td>
                                    <td>{split.stat.shots}</td>
                                    <td>{split.stat.shotPct}</td>
                                </tr>
                                : null )
                            )}
                        </tbody>
                    </Table>
                </div>
            </Fragment>
            )
        )
    }
}

const mapStateToProps = state => { 
    return { stats: state }; 
};

export default connect(mapStateToProps)(SeasonStats)
