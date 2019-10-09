import { GET_TEAMS, GET_ROSTER, GET_PLAYER, TEAMS_ERROR } from '../actions/types';

const initialState = {
    teams: [],
    roster: [],
    player: null,
    team: null,
    loading: true,
    error: {}
};

export default function(state = initialState, action){
    const { type, payload, team, player } = action;

    switch(type){
        case GET_TEAMS:
            return {
                ...state,
                teams: payload,
                loading: false,
            };
        case GET_ROSTER:
            return {
                ...state,
                roster: payload,
                loading: false,
                team
            };
        case GET_PLAYER:
            return {
                ...state,
                people: payload.people[0],
                currentTeam: payload.people[0].currentTeam,
                primaryPositionType: payload.people[0].primaryPosition.type,
                splits: payload.people[0].stats[0].splits,
                loading: false,
                team,
                player
            }
        case TEAMS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
}