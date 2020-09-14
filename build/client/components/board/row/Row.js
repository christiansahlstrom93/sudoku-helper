'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Row = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _Box = require('components/board/box/Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = exports.Row = function Row(props) {
    var onValueChange = function onValueChange(data) {
        props.updateValues({
            rowIndex: props.boardRow,
            columnIndex: props.boardColumn,
            boxIndex: data.index,
            value: Number(data.value)
        });
    };
    return _react2.default.createElement(
        'div',
        { style: _styles2.default.grid },
        props.row.map(function (data, idx) {
            return _react2.default.createElement(
                'div',
                { style: _styles2.default.box, key: idx },
                _react2.default.createElement(_Box.Box, { value: data, index: idx, onValueChange: onValueChange })
            );
        })
    );
};