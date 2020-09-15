import { createStore } from 'redux'
import { suduko } from '../reducers/sudoku';

export default class Store {
    static init() {
        const store = createStore(suduko);
        return store;
    }
}