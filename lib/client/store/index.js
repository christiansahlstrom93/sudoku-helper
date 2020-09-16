import { createStore, combineReducers } from 'redux'
import { sudoku } from '../reducers/sudoku';
import { settings } from '../reducers/settings';

export default class Store {
    static init() {
        const store = createStore(combineReducers({ sudoku, settings }));
        return store;
    }
}