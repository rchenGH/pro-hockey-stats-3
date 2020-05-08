import axios from 'axios';
import { GET_TEAMS, GET_ROSTER, GET_PLAYER } from './types';

export const getPlayer = (team, player) => async dispatch => {
    try {
        const res = await axios.get(`/teamsAPI/${team}/roster/${player}`)
        dispatch({
            type: GET_PLAYER,
            payload: res.data,
            team,
            player
        })
    } catch (err) {
        console.log(err)
    }
}

export const getRoster = (team) => async dispatch => {
    try {
        const res = await axios.get(`/teamsAPI/${team}/roster`)        
        dispatch({
            type: GET_ROSTER,
            payload: res.data,
            team
        })
    } catch (err) {
        console.log(err)
    }
}

export const getTeams = () => async dispatch => {
    try {
        const res = await axios.get('/teamsAPI')

        dispatch({
            type: GET_TEAMS,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}




