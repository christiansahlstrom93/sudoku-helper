'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Board = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _api = require('../../api');

var _api2 = _interopRequireDefault(_api);

var _Row = require('./row/Row');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var initialData = [[[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]];

var Board = exports.Board = function Board() {
    var _useState = (0, _react.useState)(),
        _useState2 = _slicedToArray(_useState, 2),
        values = _useState2[0],
        setValues = _useState2[1];

    (0, _react.useEffect)(function () {
        if (!values) {
            initValues();
        }
    }, [values]);

    var initValues = function initValues() {
        setValues(initialData);
    };

    var calculate = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var correctedSuduko;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _api2.default.post('/calculate', { data: values.flat(1) });

                        case 2:
                            correctedSuduko = _context.sent;

                            console.log(correctedSuduko);
                            setValues(correctedSuduko);

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function calculate() {
            return _ref.apply(this, arguments);
        };
    }();

    var updateValues = function updateValues(data) {
        setValues(function (prevRows) {
            return prevRows.map(function (row, rowIndex) {
                if (rowIndex === data.rowIndex) {
                    return row.map(function (column, columnIndex) {
                        if (columnIndex === data.columnIndex) {
                            return column.map(function (tuple, idx) {
                                return idx === data.boxIndex ? data.value : tuple;
                            });
                        }
                        return column;
                    });
                }
                return row;
            });
        });
    };

    if (!values) {
        return null;
    }

    return _react2.default.createElement(
        'div',
        { style: _styles2.default.container },
        values.map(function (rows, rowIndex) {
            return _react2.default.createElement(
                'div',
                { key: rowIndex, style: _styles2.default.grid },
                rows.map(function (row, columnIndex) {
                    return _react2.default.createElement(
                        'div',
                        { key: columnIndex, style: _styles2.default.gridContainer },
                        _react2.default.createElement(_Row.Row, {
                            updateValues: updateValues,
                            row: row,
                            boardRow: rowIndex,
                            boardColumn: columnIndex
                        })
                    );
                })
            );
        }),
        _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                    return calculate();
                } },
            'Submit'
        )
    );
};