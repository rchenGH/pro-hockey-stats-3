import React, {Fragment, Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SeasonStats from './seasonStats/SeasonStats';

class PlayerDetails extends Component {


    render(){

        return (
            <Fragment>
                <SeasonStats {...this.props} />
            </Fragment>
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
