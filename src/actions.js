import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_REJECT,
    REQUEST_ROBOTS_RESOLVED
} from './constants.js';
import { fetchRobots } from './api/fetchRobots'

export const setSearchField = (text) => ({ type: CHANGE_SEARCH_FIELD, payload: text });

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetchRobots('https://jsonplaceholder.typicode.com/users')
        .then(data => dispatch({ type: REQUEST_ROBOTS_RESOLVED, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_REJECT, payload: error }))

}