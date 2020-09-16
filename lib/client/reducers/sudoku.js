import {
    ADD_NUMBER,
    CALCULATE_PENDING,
    CALCULATE_DONE,
    CALCULATE_FAILED
} from '../actions/sudukoActions';

const initialData = [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
];

export function sudoku(state = { sudoku: initialData, fetching: false, error: false }, action) {
    switch(action.type) {
        case ADD_NUMBER: {
            const data = action.payload;
            let value = data.value >= 9 ? 9 : data.value;
            value = value < 1 ? 0 : value;
            return {
                ...state,
                sudoku: state.sudoku.map((row, rowIndex) => {
                    if (rowIndex === data.rowIndex) {
                        return row.map((box, idx) => idx === data.columnIndex ? Number(value) : box);
                    }
                    return row;
                })
            }
        }
        case CALCULATE_PENDING: {
            return {
                ...state,
                error: false,
                fetching: true
            }
        }
        case CALCULATE_DONE: {
            return {
                ...state,
                sudoku: action.payload,
                fetching: false
            }
        }
        case CALCULATE_FAILED: {
            return {
                ...state,
                error: true,
                fetching: false
            }
        }
        default:
            return state;
    }
}