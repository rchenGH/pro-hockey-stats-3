import { GET_TEAMS, GET_ROSTER, GET_PLAYER, TEAMS_ERROR } from '../actions/types';

const initialState = {
    teams: [],
    roster: [],
    playerStats: [],
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
                playerStats: payload,
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