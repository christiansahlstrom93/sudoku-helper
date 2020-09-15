'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Board = require('./board/Board');

var _reactRedux = require('react-redux');

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const store = _store2.default.init();

const App = exports.App = () => {
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_Board.Board, null)
    );
};