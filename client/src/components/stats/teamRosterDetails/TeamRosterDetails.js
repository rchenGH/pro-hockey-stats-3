import React, {Component, Fragment, useEffect} from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, Col } from 'reactstrap';
import { getRoster } from '../../../actions/stats';

function TeamRosterDetails(props){

    console.log('props in roster details ', props)

    useEffect(() => {
       getRoster();
    }, [getRoster]);

    const { roster } = props.stats.stats

    return(
        <Fragment>
            {console.log('props in details ', roster.roster)}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    stats: state
})
export default connect(mapStateToProps, {getRoster})(TeamRosterDetails);