'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Board = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _sudukoActions = require('../../actions/sudukoActions');

var _Box = require('./box/Box');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getSudoku = (0, _reselect.createSelector)(state => state.sudoku, sudoku => sudoku);
const getIsFetching = (0, _reselect.createSelector)(state => state.fetching, fetching => fetching);
const getHasErrors = (0, _reselect.createSelector)(state => state.error, error => error);

const Board = exports.Board = () => {
    const sudoku = (0, _reactRedux.useSelector)(getSudoku, _reactRedux.shallowEqual);
    const isFetching = (0, _reactRedux.useSelector)(getIsFetching, _reactRedux.shallowEqual);
    const hasErrors = (0, _reactRedux.useSelector)(getHasErrors, _reactRedux.shallowEqual);
    const dispatch = (0, _reactRedux.useDispatch)();
    const [mouseHover, setMouseHover] = (0, _react.useState)(false);

    const getSeparator = (index, style) => {
        if (index % 3 === 0) {
            return _react2.default.createElement('div', { style: style });
        }
        return null;
    };

    const getStatusMessage = () => {
        if (isFetching) {
            return _react2.default.createElement(
                'div',
                { style: _styles2.default.loadingText },
                'Calculating, please wait...'
            );
        } else if (hasErrors) {
            return _react2.default.createElement(
                'div',
                { style: _styles2.default.errorText },
                'Something went wrong, please try again or change the numbers'
            );
        }

        return null;
    };

    return _react2.default.createElement(
        'div',
        { style: _styles2.default.board },
        _react2.default.createElement(
            'div',
            { style: _styles2.default.container },
            sudoku.map((row, idx) => _react2.default.createElement(
                'div',
                { key: idx, className: 'separator' },
                getSeparator(idx, { paddingBottom: '8px' }),
                _react2.default.createElement(
                    'div',
                    { className: 'row', style: _styles2.default.row },
                    row.map((boxValue, index) => _react2.default.createElement(
                        _react2.default.Fragment,
                        { key: index },
                        getSeparator(index, { paddingRight: '8px' }),
                        _react2.default.createElement(
                            'div',
                            { style: _styles2.default.box },
                            _react2.default.createElement(_Box.Box, {
                                value: boxValue,
                                rowIndex: idx,
                                columnIndex: index,
                                onValueChange: data => dispatch((0, _sudukoActions.addNumber)(data))
                            })
                        )
                    ))
                )
            ))
        ),
        getStatusMessage(),
        _react2.default.createElement(
            'div',
            { style: _styles2.default.buttonContainer },
            _react2.default.createElement(
                'button',
                {
                    disabled: isFetching,
                    style: mouseHover ? _styles2.default.buttonHover : _styles2.default.button,
                    onClick: () => (0, _sudukoActions.calculate)(dispatch, sudoku),
                    onMouseEnter: () => setMouseHover(true),
                    onMouseLeave: () => setMouseHover(false)
                },
                'Calculate'
            )
        )
    );
};