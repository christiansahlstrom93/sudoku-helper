'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.suduko = suduko;

var _sudukoActions = require('../actions/sudukoActions');

const initialData = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]];

function suduko(state = { sudoku: initialData, fetching: false, error: false }, action) {
    switch (action.type) {
        case _sudukoActions.ADD_NUMBER:
            {
                const data = action.payload;
                let value = data.value >= 9 ? 9 : data.value;
                value = value < 1 ? 0 : value;
                return _extends({}, state, {
                    sudoku: state.sudoku.map((row, rowIndex) => {
                        if (rowIndex === data.rowIndex) {
                            return row.map((box, idx) => idx === data.columnIndex ? Number(value) : box);
                        }
                        return row;
                    })
                });
            }
        case _sudukoActions.CALCULATE_PENDING:
            {
                return _extends({}, state, {
                    error: false,
                    fetching: true
                });
            }
        case _sudukoActions.CALCULATE_DONE:
            {
                return _extends({}, state, {
                    sudoku: action.payload,
                    fetching: false
                });
            }
        case _sudukoActions.CALCULATE_FAILED:
            {
                return _extends({}, state, {
                    error: true,
                    fetching: false
                });
            }
        default:
            return state;
    }
}