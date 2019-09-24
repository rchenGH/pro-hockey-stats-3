import { GET_TEAMS, GET_ROSTER, TEAMS_ERROR } from '../actions/types';

const initialState = {
    teams: [],
    roster: [],
    team: null,
    loading: true,
    error: {}
};

export default function(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case GET_TEAMS:
            return {
                ...state,
                teams: payload,
                loading: false
            };
        case GET_ROSTER:
            return {
                ...state,
                roster: payload,
                loading: false
            };
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