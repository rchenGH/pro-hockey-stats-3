import React, {Fragment, Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SeasonStats from './seasonStats/SeasonStats';
import Spinner from '../../layout/common/Spinner'

class PlayerDetails extends Component {


    render(){

        const { loading } = this.props.stats.stats

        return (
            loading ? <Spinner /> : (
                <Fragment>
                    <SeasonStats {...this.props} />
                </Fragment>
            )
        )
    }
}

PlayerDetails.propTypes = {
    stats: PropTypes.object.isRequired
}

const mapStateToProps = state => { 
    return { stats: state }; 
};

export default connect(mapStateToProps)(PlayerDetails)
