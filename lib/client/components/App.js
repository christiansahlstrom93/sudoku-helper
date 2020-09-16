import React from 'react';
import { Board } from 'components/board/Board';
import { Provider } from 'react-redux';
import Store from 'store';
import { Header } from 'components/header/Header';

const store = Store.init();

export const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', maxWidth: '100%', marginTop: '80px', padding: '0 8px 8px 0' }}>
                <Board />
            </div>
        </Provider>
    )
};
