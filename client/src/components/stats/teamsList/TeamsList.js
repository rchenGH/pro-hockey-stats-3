import React, {Fragment} from 'react';
import TeamRoster from '../teamRoster/TeamRoster';

function TeamsList(props){

    const{ teams = [] } = props
    
    return (
        <Fragment>
            {
                teams.map(team => ( 
                    <TeamRoster key={team.id} {...team}/>
                ))
            }
        </Fragment>
    )
}

export default TeamsList