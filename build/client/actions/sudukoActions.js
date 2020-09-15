'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CALCULATE_FAILED = exports.CALCULATE_DONE = exports.CALCULATE_PENDING = exports.ADD_NUMBER = undefined;
exports.addNumber = addNumber;
exports.calculate = calculate;

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ADD_NUMBER = exports.ADD_NUMBER = 'ADD_NUMBER';
const CALCULATE_PENDING = exports.CALCULATE_PENDING = 'CALCULATE_PENDING';
const CALCULATE_DONE = exports.CALCULATE_DONE = 'CALCULATE_DONE';
const CALCULATE_FAILED = exports.CALCULATE_FAILED = 'CALCULATE_FAILED';

function addNumber(number) {
    return {
        type: ADD_NUMBER,
        payload: number
    };
}

function calculate(dispatch, data) {
    dispatch({ type: CALCULATE_PENDING });
    _api2.default.post('/calculate', { data }).then(response => {
        dispatch({ type: CALCULATE_DONE, payload: response });
    }).catch(err => {
        dispatch({ type: CALCULATE_FAILED, payload: err });
    });
}