'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderIndex = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _App = require('components/App');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderIndex = exports.renderIndex = () => _server2.default.renderToString(_react2.default.createElement(_App.App, null));