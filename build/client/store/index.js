'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _sudoku = require('../reducers/sudoku');

class Store {
    static init() {
        const store = (0, _redux.createStore)(_sudoku.suduko);
        console.log(store.getState());
        return store;
    }
}
exports.default = Store;