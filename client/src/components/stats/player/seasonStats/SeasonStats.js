import React, {Fragment, Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import './seasonstats.css';
import axios from 'axios'

class SeasonStats extends Component {

    constructor(){
        super();
        this.state = {
            stats: [],
            people: []
        }
    };


    componentDidUpdate (prevProps) {
        const { player, team } = this.props.stats.stats
       
            axios.get(`/teams/${team}/roster/${player}`)
            .then(res => {
                if(player !== prevProps.stats.stats.player){
                this.setState ({
                    stats: res.data,
                    people: res.data.people[0]
                })
            }
            }).catch((err) => {
                console.log(err)
            })
    }
    
    render() {
        return (
            <Fragment>
                <Table className="season-table">
                    <thead>
                        <tr>
                            <th className="season">SEASON</th>
                            <th className="team">TEAM</th>
                            <th className="age">AGE</th>
                            <th className="gp">GP</th>
                            <th className="g">G</th>
                            <th className="a">A</th>
                            <th className="pts">PTS</th>
                            <th className="plus_minus">+/-</th>
                            <th className="pim">PIM</th>
                            <th className="evg">EVG</th>
                            <th className="eva">EVA</th>
                            <th className="ppg">PPG</th>
                            <th className="ppa">PPA</th>
                            <th className="sh">SH</th>
                            <th className="gw">GW</th>
                            <th className="s">S</th>
                            <th className="s_percentage">S%</th>
                        </tr>
                    </thead>
                </Table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => { 
    return { stats: state }; 
};

export default connect(mapStateToProps)(SeasonStats)
