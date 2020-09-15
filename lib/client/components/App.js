import React from 'react';
import { Board } from './board/Board';
import { Provider } from 'react-redux';
import Store from '../store';

const store = Store.init();

export const App = () => {
    return (
        <Provider store={store}>        
            <Board />
        </Provider>
    )
};
