import { GET_TEAMS } from '../actions/types';


const initialState = {
    stats: [],
    loading: true
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
        default:
            return state;
    }
}