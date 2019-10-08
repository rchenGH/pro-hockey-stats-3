import React, {Fragment, Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Spinner from '../../../layout/common/Spinner'
import './seasonstats.css';
import axios from 'axios'
import toiStat from './toiStat';
import toiTotal from './toiTotal'

class SeasonStats extends Component {

    constructor(){
        super();
        this.state = {
            people: [],
            currentTeam: [],
            splits: [],
            primaryPositionType: null,
            timeOnIce: []
        }
    };

    componentDidUpdate (prevProps) {
        const { player, team } = this.props.stats.stats
       
        axios.get(`/teams/${team}/roster/${player}`)
        .then(res => {
            if(player !== prevProps.stats.stats.player){
            this.setState ({
                people: res.data.people[0],
                currentTeam: res.data.people[0].currentTeam,
                primaryPositionType: res.data.people[0].primaryPosition.type,
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

        const { splits, people, currentTeam, primaryPositionType} = this.state;

        let [   gamesResult, goalsResult, assistsResult, pointsResult, pmResult, pimResult, 
                ppgResult, pppResult, shgResult, gwgResult, shotsResult, shotPctResult,
                gsResult, winsResult, lossesResult, otResult, saResult, gaResult, 
                gaaResult, savesResult, toiResult, toiSeasonArray ] 
                = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

        const statResults = (result, playerStat) => {
            for(let i = 0; i < splits.length; i++){
                splits[i].league.name === "National Hockey League" ?
                result += splits[i].stat[playerStat] : result += 0
            }
            return result
        }

        let shotPctArray = []

        for(let i = 0; i < splits.length; i++){
            if(splits[i].league.name === "National Hockey League") {
                shotPctArray.push(splits[i].stat.shotPct)
                shotPctResult += (splits[i].stat.shotPct)
            } else{
                shotPctResult += 0
            }      
        }

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
                {primaryPositionType === 'Goalie' ? 
                    <Table>
                        <thead>
                            <tr>
                                <th className="season">SEASON</th>
                                <th className="team">TEAM</th>
                                <th className="gp">GP</th>
                                <th className="gs">GS</th>
                                <th className="wins">W</th>
                                <th className="losses">L</th>
                                <th className="ties">T</th>
                                <th className="ot">OT</th>
                                <th className="sa">SA</th>
                                <th className="ga">GA</th>
                                <th className="gaa">GAA</th>
                                <th className="saves">S</th>
                                <th className="sv-pct">S%</th>
                                <th className="toi">TOI</th>
                            </tr>
                        </thead>
                        <tbody>            
                            {splits.map((split, index) => 
                            ( split.league.name === "National Hockey League" ?
                            <tr key={index} className="season-row">
                                <td className="season">{splitYear(split.season)}</td>
                                <td>{split.team.name}</td>
                                <td>{split.stat.games}</td>
                                <td>{split.stat.gamesStarted}</td>
                                <td>{split.stat.wins}</td>
                                <td>{split.stat.losses}</td>
                                <td>{typeof split.stat.ties === "undefined" ? "-" : split.stat.ties}</td>
                                <td>{split.stat.ot}</td>
                                <td>{split.stat.shotsAgainst}</td>
                                <td>{split.stat.goalsAgainst}</td>
                                <td>{(split.stat.goalAgainstAverage).toFixed(2)}</td>
                                <td>{split.stat.saves}</td>
                                <td>{split.stat.savePercentage}</td>
                                <td>{(toiStat(toiSeasonArray, split.stat.timeOnIce).toFixed(0))}</td>
                            </tr> 
                            : null ))}
                            <tr>
                                <td>Totals</td>
                                <td>--</td>
                                <td>{statResults(gamesResult, "games")}</td>
                                <td>{statResults(gsResult, "gamesStarted")}</td>
                                <td>{statResults(winsResult, 'wins')}</td>
                                <td>{statResults(lossesResult, 'losses')}</td>
                                <td>--</td>
                                <td>{statResults(otResult, 'ot')}</td>
                                <td>{statResults(saResult, 'shotsAgainst')}</td>
                                <td>{statResults(gaResult, 'goalsAgainst')}</td>
                                <td>{((statResults(gaResult, 'goalsAgainst') * 60) / toiTotal(toiResult, splits)).toFixed(2)}</td>
                                <td>{statResults(savesResult, 'saves')}</td>
                                <td>{(statResults(savesResult, 'saves')/statResults(saResult, 'shotsAgainst')).toFixed(3)}</td>
                                <td>{toiTotal(toiResult, splits).toFixed(0)}</td>
                            </tr>
                        </tbody>
                    </Table> : 

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
                                    <td>{split.stat.powerPlayPoints}</td>
                                    <td>{split.stat.shortHandedGoals}</td>
                                    <td>{split.stat.gameWinningGoals}</td>
                                    <td>{split.stat.shots}</td>
                                    <td>{split.stat.shotPct}</td>
                                </tr>
                                : null )
                            )}
                                <tr>
                                    <td>Totals</td>
                                    <td>--</td>
                                    <td>{statResults(gamesResult, "games")}</td>
                                    <td>{statResults(goalsResult, "goals")}</td>
                                    <td>{statResults(assistsResult, "assists")}</td>
                                    <td>{statResults(pointsResult, 'points')}</td>
                                    <td>{statResults(pmResult, 'plusMinus')}</td>
                                    <td>{statResults(pimResult, 'pim')}</td>
                                    <td>{statResults(ppgResult, 'powerPlayGoals')}</td>
                                    <td>{statResults(pppResult, 'powerPlayPoints')}</td>
                                    <td>{statResults(shgResult, 'shortHandedGoals')}</td>
                                    <td>{statResults(gwgResult, 'gameWinningGoals')}</td>
                                    <td>{statResults(shotsResult, 'shots')}</td>
                                    <td>{(shotPctResult/shotPctArray.length).toFixed(1)}</td>
                                </tr>
                        </tbody>
                    </Table>
                }
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
