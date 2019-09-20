import axios from 'axios';
import { GET_TEAMS } from './types';

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