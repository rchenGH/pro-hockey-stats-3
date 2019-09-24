import axios from 'axios';
import { GET_TEAMS, GET_ROSTER } from './types';

export const getTeams = () => async dispatch => {
    try {
        const res = await axios.get('/teams')

        dispatch({
            type: GET_TEAMS,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}

export const getRoster = (team) => async dispatch => {
    try {
        const res = await axios.get(`/teams/${team}/roster`)
        dispatch({
            type: GET_ROSTER,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}