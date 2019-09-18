import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import stats from './stats';


export default combineReducers({
    alert,
    auth,
    stats
});