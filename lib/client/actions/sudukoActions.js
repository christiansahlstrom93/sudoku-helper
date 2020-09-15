import API from '../api';

export const ADD_NUMBER = 'ADD_NUMBER';
export const CALCULATE_PENDING = 'CALCULATE_PENDING';
export const CALCULATE_DONE = 'CALCULATE_DONE';
export const CALCULATE_FAILED = 'CALCULATE_FAILED';

export function addNumber(number) {
    return {
        type: ADD_NUMBER,
        payload: number
    }
}

export function calculate(dispatch, data) {
    dispatch({ type: CALCULATE_PENDING });
    API.post('/calculate', { data })
        .then(response => {
            dispatch({ type: CALCULATE_DONE, payload: response });
        })
        .catch(err => {
            dispatch({ type: CALCULATE_FAILED, payload: err });
        });
}