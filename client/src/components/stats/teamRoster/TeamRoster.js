import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Card, CardTitle, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getRoster } from '../../../actions/stats';
import Spinner from '../../layout/common/Spinner'
import './teamroster.css'

 class TeamRoster extends Component{     
    constructor(stats, getRoster){
        super(stats, getRoster);
        this.state = {
          team: {},
        }
      };

    render(){
        const { name, getRoster } = this.props
        const { loading } = this.props.stats.stats

        let teamLink = this.props.teamName.split(' ').join('').toLowerCase();
    
        return (
            loading ? <Spinner /> : (
            <Fragment>
                <Col className="roster-col" xs="12" sm="6" md="4" lg="3" 
                onClick={ () => getRoster(teamLink) }> 
                    <Link to={`/teams/${teamLink}/roster/`}>
                        <Card body className="team-card">
                            <CardTitle>{name}</CardTitle>
                        </Card>
                    </Link>
                </Col>            
            </Fragment>
            )
        )
      }
    }

TeamRoster.propTypes = {
    stats: PropTypes.object.isRequired,
    getRoster: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {stats: state}
}

export default connect(mapStateToProps, {getRoster})(TeamRoster)

