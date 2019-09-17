import { OPEN_MENU, CLOSE_MENU } from './types';

export const navigation = () => dispatch => {
    dispatch({
        type: OPEN_MENU
    })
}