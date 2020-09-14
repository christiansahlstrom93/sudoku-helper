'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Box = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = exports.Box = function Box(props) {
    return _react2.default.createElement('input', {
        type: 'number',
        min: '0',
        max: '9',
        style: _styles2.default.input,
        value: props.value,
        onChange: function onChange(e) {
            return props.onValueChange({ value: e.target.value, index: props.index });
        }
    });
};